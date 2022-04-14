require('darkmode-js');
const options = {
  saveInCookies: true,
  label: '🌓',
  autoMatchOsTheme: true,
};

const darkmode = new Darkmode(options);

darkmode.showWidget();



// ------------------------------------------------------------------------



const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],

    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']
  ];


  const opt = {
    modules: {
      toolbar: toolbarOptions
    },

    theme: 'snow',
    placeholder: 'insira um texto',
  };

  const quill = new Quill('#editor', opt);