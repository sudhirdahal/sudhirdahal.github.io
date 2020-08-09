/* Add any JavaScript you need to this file. */
(function() {
  function setupMenuHandlers() {
    var menMenu = document.querySelector('#option1');
    menMenu.addEventListener('click', function() {
      let menOption = document.querySelector('#optionM');
      let main1 = document.querySelector('#mainContainer');
      let display = menOption.style.display;
      let femaleOption = document.querySelector('#optionF');
      femaleOption.style.display = 'none';
      let childrenOption = document.querySelector('#optionC');
      childrenOption.style.display = 'none';
      if (display === 'flex') {
        main1.style.display = 'flex';
        menOption.style.display = 'none';
      } else {
        main1.style.display = 'none';
        menOption.style.display = 'flex';
      }
    });

    var femaleMenu = document.querySelector('#option2');
    femaleMenu.addEventListener('click', function() {
      let femaleOption = document.querySelector('#optionF');
      let main2 = document.querySelector('#mainContainer');
      let display = femaleOption.style.display;
      let menOption = document.querySelector('#optionM');
      menOption.style.display = 'none';
      let childrenOption = document.querySelector('#optionC');
      childrenOption.style.display = 'none';
      if (display === 'flex') {
        main2.style.display = 'flex';
        femaleOption.style.display = 'none';
      } else {
        main2.style.display = 'none';
        femaleOption.style.display = 'flex';
      }
    });

    var childrenMenu = document.querySelector('#option3');
    childrenMenu.addEventListener('click', function() {
      let childrenOption = document.querySelector('#optionC');
      let main2 = document.querySelector('#mainContainer');
      let display = childrenOption.style.display;
      let menOption = document.querySelector('#optionM');
      menOption.style.display = 'none';
      let femaleOption = document.querySelector('#optionF');
      femaleOption.style.display = 'none';
      if (display === 'flex') {
        main2.style.display = 'flex';
        childrenOption.style.display = 'none';
      } else {
        main2.style.display = 'none';
        childrenOption.style.display = 'flex';
      }
    });
  }
  window.onload = setupMenuHandlers;
})();
