const contentCache = new Map();

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
      const previewDiv = document.createElement('div');
      previewDiv.classList.add('preview-card');
      
      if(contentCache.has(link.href))
      {
        const sanitizedArticle = DOMPurify.sanitize(contentCache.get(link.href));
        previewDiv.innerHTML = sanitizedArticle;
      }
      else
      {
        try
        {
          // リンク先のページの内容を取得
          const response = await fetch(link.href);
          const html = await response.text();
  
          // ページ構造から記事の部分だけを抜き出す
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const mainContent = doc.querySelector('article');
          if (mainContent)
          {
            contentCache.set(link.href, mainContent.innerHTML);

            // XSS対策として、記事はサニタイズしてから表示する
            const sanitizedArticle = DOMPurify.sanitize(mainContent.innerHTML);
            previewDiv.innerHTML = sanitizedArticle;
          }
          else
          {
            previewDiv.innerHTML = 'プレビューを取得できません。';
          }
        }
        catch (error)
        {
          previewDiv.innerHTML = 'プレビューを取得できません。';
        }
      }

      document.body.appendChild(previewDiv);
      // TODO: 画面の下の方でマウスホバーしたときはプレビューを上に出す
      previewDiv.style.position = 'absolute';
      previewDiv.style.top = `${event.pageY + 10}px`;
      previewDiv.style.left = `${event.pageX + 10}px`;
      
      link.addEventListener('mouseleave', () =>
      {
        previewDiv.remove();
      });
    });
  });
});
