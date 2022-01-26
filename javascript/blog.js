const firebaseConfig = {
  apiKey: "AIzaSyDYaiHcGG8La-rYH9NI1HlG3s1GscF7Epk",
  authDomain: "capstone-app-e5b61.firebaseapp.com",
  projectId: "capstone-app-e5b61",
  storageBucket: "capstone-app-e5b61.appspot.com",
  messagingSenderId: "45166716819",
  appId: "1:45166716819:web:4a345c62e6b33a19fa2a66",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref("posts");

const card = document.querySelector("#postcard");
//  get all posts

databaseRef.on("value", (snapshot) => {
  for (let [key, value] of Object.entries(snapshot.val())) {
    card.innerHTML +=
      " <div class='card'>" +
      "<img src='https://picsum.photos/600/500/?random' alt='Random photo' class='card-img'/> " +
      " <div class='card-body'>" +
      " <h1 id='heading'>personal branding</h1>" +
      "<p id='year'>Jan 1 2020</p>" +
      "<p >" +
      value.title +
      "</p>" +
      "<div class='button'>" +
      "<button type='button'id='" +
      key +
      "'   onClick='viewSingle(this.id)'>ReadMore</button>" +
      " </div></div> </div>";

    const id = key;
    console.log(id, value);
  }
});

// view a single post from firebase

const viewSingle = (key) => {
  console.log(key);

  const databaseRef = firebase.database().ref("posts");

  databaseRef.on("value", (snapshot) => {
    console.log(snapshot.val());
  });
};

const submitPost = () => {
  let name = document.getElementById("name").value;
  let title = document.getElementById("title").value;
  let textarea = document.getElementById("textarea").value;

  //   submitData();
  console.log("post");
};
document.getElementById("blog").addEventListener("submit", submitPost);
