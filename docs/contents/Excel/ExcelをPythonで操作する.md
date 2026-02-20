---
create_date: 2026-02-20
modificate_date: 2026-02-20
---
<https://pandas.pydata.org/docs/reference/io.html#excel>

[[pandas]]でExcelファイルを扱える。  
（別途`openpyxl`のimportが必要）

一般的なcsvを読み込んだのと同様に操作が可能。
```python
df = pd.read_excel(excel_path, header=None)
```

## 仕様
* 結合されたセルは、Dataframe上では一番左上のセル番号を参照する