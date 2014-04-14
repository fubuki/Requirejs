Solr-News-Search
=========

利用Solr搜尋Scrapy抓取的新聞資料，新聞資料存放在MongoDB裡，利用[mongo-connector]讓solr取得MongoDB的資料。
此外利用d3.js顯示在這個新聞裡詞條的出現的頻率。

未來希望能夠將新聞內容丟入語言模型訓練出分類器，如果丟入一篇新聞能夠顯示是關於哪方面的領域，並且還能猜出
作者或是這篇新聞算正面還是負面新聞。


[mongo-connector]: https://github.com/10gen-labs/mongo-connector
