# Northcoders News

Northcoders News is a social news aggregation, web content rating, and discussion website, not dissimilar [Reddit](https://www.reddit.com/).
Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.
## Links:
Deployed version: https://simons-nc-news.herokuapp.com/api/
Back-end code: https://github.com/Honestocean/HO-NC-NEWS
Front-end code: https://github.com/Honestocean/NC-NEWs-FE.git
### Node requirement:
v12.10.0
#### To run:
Git clone the following link: https://github.com/Honestocean/NC-NEWs-FE.git
npm i
npm start
You will be logged in as default user "weegembump"
#### Functionality
The following functionality is available:
**As a user, you can...**
1. view a list of all articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. sort articles by:
   - date created
   - comment_count
   - votes
6. post a new comment to an existing article (as the default logged in user.).
7. delete your own comments (as the default logged in user).
8. vote on an article and immediately see the change.
9. vote on a comment and immediately see the change.
10. use the site on a mobile without sacrificing style or functionality.
11. receive a 404 error if you follow a non-existent path/a path for a non-existent article/topic.
12. receive a 400 error if you follow a path for an invalid article ID.

