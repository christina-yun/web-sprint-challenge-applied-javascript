
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

import axios from "axios";

  //
  // const nameArray =['javascript', 'bootstrap', 'technology'];

  //actual code
  const Tabs = (topics) => {
    const topicsDiv = document.createElement('div');
    topicsDiv.classList ='topics';

    topics.forEach(topic => {
      const newTopic = document.createElement('div');
      newTopic.classList = 'tab'; /* <- was able to pass code without this earlier*/
      newTopic.textContent = topic;
      topicsDiv.appendChild(newTopic);
    });
    return topicsDiv;
  }
  // console.log(Tabs(nameArray));


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabsAppender = (selector) => {
    const tabsContainer = document.querySelector(selector);
       axios.get('http://localhost:5000/api/topics')
     .then(object => {
      //  console.log('topics', object.data.topics)
       tabsContainer.appendChild(Tabs(object.data.topics));
       })

     .catch(err => {
       console.error('There is something wrong with your tabsAppender promise')
     });

     return tabsContainer;
  }
// console.log('tabs', tabsAppender('.tabs-container'));
export { Tabs, tabsAppender }
