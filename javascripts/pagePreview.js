const contentCache = new Map();
let previewDiv = null;
let previewHideTimer = null;

document.addEventListener('DOMContentLoaded', () => 
{
  // 現状ではページプレビューを出すのは記事内のみ（右側のTOC含むサイドバーは処理しない）
  document.querySelector('article').querySelectorAll('a').forEach(link =>
  {
    // 内部リンクのみ対象にする
    if (link.hostname !== window.location.hostname)
    {
      return;
    }
    link.addEventListener('mouseenter', async (event) =>
    {
      removePreviewIfExist();
      clearTimeout(previewHideTimer);
      previewDiv = document.createElement('div');
      previewDiv.classList.add('preview-card', 'md-typeset');
      
      // プレビューするページの内容を取得する
      const sanitizedPage = await fetchPreviewPage(link);
      if(sanitizedPage == null)
      {
        sanitizedPage = 'プレビューを取得できません。';
      }

      // XSS対策として、記事はサニタイズしてから表示する
      previewDiv.innerHTML = sanitizedPage;

      document.body.appendChild(previewDiv);
      
      // 画面の下の方でマウスホバーしたときはプレビューを上に出す（見えなくなるので）
      const innerHeight = window.innerHeight;
      let previewDivY = event.pageY + 10;
      if(event.screenY > (innerHeight * 0.4))
      {
        previewDivY = event.pageY - previewDiv.clientHeight;
      }

      previewDiv.style.position = 'absolute';
      previewDiv.style.top = `${previewDivY}px`;
      previewDiv.style.left = `${event.pageX + 10}px`;

      // プレビューがマウスが離れた場合はプレビュー削除
      previewDiv.addEventListener('mouseleave', () =>
      {
        scheduleHidePreview();
      });

      // プレビューにマウスが乗っていたらプレビューを表示したままにする
      previewDiv.addEventListener('mouseenter', () =>
      {
        clearTimeout(previewHideTimer);
      });
    });

    // リンクからマウスが離れた場合もプレビュー削除
    link.addEventListener('mouseout', () =>
    {
      scheduleHidePreview();
    });
  });
});

// 時間差でプレビューの削除をする
// （マウスが離れてすぐだとリンクからプレビューにマウスを動かす前に削除されてしまう）
function scheduleHidePreview()
{
  previewHideTimer = setTimeout(() =>
  {
    removePreviewIfExist();
  }, 500);
}

function removePreviewIfExist()
{
  if(previewDiv)
  {
    previewDiv.remove();
    previewDiv = null;
  }
}

// プレビュー先の内容を取得する
async function fetchPreviewPage(link)
{
  if(contentCache.has(link.href))
  {
    const sanitizedPage = DOMPurify.sanitize(contentCache.get(link.href));
    return sanitizedPage;
  }

  // リンク先のページの内容を取得
  const mainContent = await fetchPreviewContent(link);
  if (!mainContent)
  {
    return null;
  }

  contentCache.set(link.href, mainContent.innerHTML);
  return DOMPurify.sanitize(mainContent.innerHTML);
}

async function fetchPreviewContent(link)
{
  if (link.hostname !== window.location.hostname)
  {
    return null;
  }

  // リンク先のページの内容を取得
  try 
  {
    const response = await fetch(link.href);
    const html = await response.text();

    // ページ構造から記事の部分だけを抜き出す
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const mainContent = doc.querySelector('article');
    if(!mainContent)
    {
      return null;
    }

    return mainContent;
  }
  catch (error)
  {
    return null;
  }
}