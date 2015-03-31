var paths = {
  'scribe': '../bower_components/scribe/scribe',
  'scribe-plugin-toolbar': '../bower_components/scribe-plugin-toolbar/scribe-plugin-toolbar',
  'scribe-plugin-table-command': '../bower_components/scribe-plugin-table-command/scribe-plugin-table-command',
  'scribe-plugin-placeholder': '../bower_components/scribe-plugin-placeholder/scribe-plugin-placeholder'
};

var map = {
  '*': {
    'css': '../bower_components/require-css/css'
  }
};

require({ paths: paths, map: map }, [
  'scribe',
  'scribe-plugin-toolbar',
  'scribe-plugin-table-command',
  'scribe-plugin-placeholder',

  'css!scribe-plugin-table-command',
  'css!scribe-plugin-placeholder'
], function (
  Scribe,
  toolbarPlugin,
  tableCommand,
  placeholderPlugin
) {

  // table
  var scribeTable = new Scribe(document.querySelector('.scribe-table'), {
    allowBlockElements: true
  });

  scribeTable.use(toolbarPlugin(document.querySelector('.toolbar')));
  scribeTable.use(tableCommand());

  var html = '<p>Scribe Table Command Demo.</p><p>Right Click in a table cell to show context menu</p>';
  html += '<table><tbody><tr><td>Header1</td><td>Header2</td><td>Header3</td></tr><tr><td>value1</td><td>value2</td><td>value3</td></tr></tbody></table>';
  scribeTable.setContent(html);

  // placeholder

  var scribePlaceholder = new Scribe(document.querySelector('.scribe-placeholder'), {
    allowBlockElements: true
  });

  var container = document.querySelector('.scribe-placeholder-container');
  scribePlaceholder.use(placeholderPlugin('Demo of scribe placeholder text...', container));
  scribePlaceholder.setContent('');
});