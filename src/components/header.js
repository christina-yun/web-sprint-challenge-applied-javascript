  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const Header = (title, date, temp) => {
    //variables
    const header = document.createElement('div');
    const todayDate = document.createElement('span');
    const lambdaTimes = document.createElement('h1')
    const todayTemp = document.createElement('span')

    //add classes
    header.classList = 'header';
    todayDate.classList ='date';
    todayTemp.classList = 'temp'

    //text content
    todayDate.textContent = date;
    lambdaTimes.textContent = title;
    todayTemp.textContent = temp;

    //append children
    header.appendChild(todayDate);
    header.appendChild(lambdaTimes);
    header.appendChild(todayTemp);

    return header;
  }
  Header('Lambda Times', 'August 6, 2021', '65°F');

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerAppender = (selector) => {
    const headerContainer = document.querySelector(selector);

    headerContainer.appendChild(Header('Lambda Times', 'August 6, 2021', '65°F'))
    return headerContainer;
  }

export { Header, headerAppender }
