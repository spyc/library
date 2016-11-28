'use strict';

import marked from 'marked';

module.exports = function (url, component) {
  component.$http.get(url)
    .then((response) => {
      return response.text();
    })
    .then((content) => {
      const titleRegexp = /###\s+(.+)/;
      const imageRegexp = /!\[([^\]]+)]\(([^)]+)\)/;
      const title = content.match(titleRegexp);
      const image = content.match(imageRegexp);
      const text = content.replace(titleRegexp, '').replace(imageRegexp, '');
      component.content = marked(text);
      component.title = title && title.length > 1 ? title[1].trim() : '';
      component.done = true;
      component.image = image && image.length > 1 ? image[2].trim() : false;
      component.key = image && image.length > 1 ? image[1].trim() : false;
    })
    .catch((e) => {
      console.error(e.stack);
      component.title = 'Opps! Error occur!';
      component.content = 'Please check your network or any typing missing in the website.' +
        ' If you confirm no this two,' +
        'please report it on <a href="https://github.com/spyc/library/issues/new">Github</a> ' +
        'or email to tony@opensource.hk';
      component.done = true;
    });
};