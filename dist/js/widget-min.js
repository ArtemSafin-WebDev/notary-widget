document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".js-application-widget");e&&(window.appWidget=function(e){var t=0,n=Array.prototype.slice.call(e.querySelectorAll(".application-widget__content-block")),a=n.length,i=[{name:"Выберите станцию метро"},{name:"Выберите нотариуса"},{name:"Выберите сеанс"},{name:"Контактная информация"}],r=e.querySelector(".application-widget__close"),l=e.querySelector(".application-widget__main-btn"),c=e.querySelector(".application-widget__main-btn-text"),o=e.querySelector(".application-widget__nav-action"),s=e.querySelector(".application-widget__nav-pagination"),p=e.querySelector(".application-widget__nav-back"),u=Array.prototype.slice.call(e.querySelectorAll(".application-widget__scroll-container")),d=Array.prototype.slice.call(e.querySelectorAll('input[type="tel"]')),m="ru",g=e.querySelector("form"),f=null;function v(r){n.forEach(function(e,t){t!==r?e.classList.remove("active"):e.classList.add("active")}),(t=r)+1===a?e.classList.add("last-step"):e.classList.remove("last-step"),0===t?e.classList.add("first-step"):e.classList.remove("first-step"),o.textContent=i[t].name,s.textContent=t+1+"/"+a}function y(){c.textContent=t===a-1?"Записаться":"Следующий шаг"}function w(){e.classList.add("visible")}function k(){e.classList.remove("visible")}return{init:function(){r.addEventListener("click",appWidget.close),l.addEventListener("click",appWidget.clickCentralButton),p.addEventListener("click",appWidget.goBackward),v(t),u.forEach(function(e){new PerfectScrollbar(e,{wheelSpeed:2,wheelPropagation:!1,minScrollbarLength:58,maxScrollbarLength:58})}),d.forEach(function(e){Inputmask({mask:"+7 (999) 999-99-99"}).mask(e)}),window.Parsley.addValidator("phone",{requirementType:"string",validateString:function(e){return/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(e)},messages:{en:"This value should be a mobile number",ru:"Введите правильный номер мобильного телефона"}}),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение.",type:{email:"В данном поле может быть только E-mail",url:"Адрес сайта введен неверно.",number:"Введите число.",integer:"Введите целое число.",digits:"Введите только цифры.",alphanum:"Введите буквенно-цифровое значение."},notblank:"Это поле должно быть заполнено.",required:"Обязательное поле",pattern:"Это значение некорректно.",min:"Это значение должно быть не менее чем %s.",max:"Это значение должно быть не более чем %s.",range:"Это значение должно быть от %s до %s.",minlength:"Это значение должно содержать не менее %s символов.",maxlength:"Это значение должно содержать не более %s символов.",length:"Это значение должно содержать от %s до %s символов.",mincheck:"Выберите не менее %s значений.",maxcheck:"Выберите не более %s значений.",check:"Выберите от %s до %s значений.",equalto:"Это значение должно совпадать."}),Parsley.setLocale(m),$(g).parsley({errorsContainer:function(e){var t=e.$element.closest(".application-widget__contacts-row");return t}}),w()},destroy:function(){r.removeEventListener("click",appWidget.close),l.removeEventListener("click",appWidget.clickCentralButton),t=0,k()},close:k,open:w,getCurrentStep:function(){return t},clickCentralButton:function(e){t<a-1?(e.preventDefault(),t<a-1&&v(t+1),y()):f&&(e.preventDefault(),$(g).parsley().isValid()&&f(new FormData(g)))},goBackward:function(e){void 0!==e&&e.preventDefault(),t>=1&&v(t-1),y()},onSubmit:function(e){f=e}}}(e),appWidget.init())});