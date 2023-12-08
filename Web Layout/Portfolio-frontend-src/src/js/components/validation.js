import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'at least 3 characters'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'maximum 30 characters'
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Enter your name!'
      },
    ]
  },
  // {
  //   ruleSelector: '.input-tel',
  //   tel: true,
  //   telError: 'Введите корректный телефон',
  //   rules: [
  //     {
  //       rule: 'required',
  //       value: true,
  //       errorMessage: 'Заполните телефон!'
  //     }
  //   ]
  // },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Enter your e-mail!'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Enter valid e-mail!'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.contacts__form', rules, afterForm);
