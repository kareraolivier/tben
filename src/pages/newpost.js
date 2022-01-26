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

// const storageRef = firebase.storage().ref("imges");

const submitData = (name, title, textarea, image, imageName) => {
  // let newstorage = storageRef.put(image);
  // newstorage.on(
  //   "state_changed",
  //   (snapshot) => {
  //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log("Upload is " + progress + "% done");
  //   },
  //   (error) => {
  //     console.log(error.message);
  //   },
  //   () => {
  //     newstorage.snapshot.ref.getDownloadURL().then((downloadURL) => {
  //       let newmessageRef = databaseRef.push();
  //       newmessageRef
  //         .set({
  //           name: name,
  //           title,
  //           textarea,
  //           imageURL: downloadURL,
  //         })
  //         .then(function () {
  //           // show alert
  //           console.log("subimit");
  //           alert("postcreated");

  //           // setTimeout(function () {
  //           //   window.location.reload();
  //           // }, 3000);
  //         })
  //         .catch(function (error) {
  //           window.alert(error);
  //         });
  //     });
  //   }
  // );

  //

  let newmessageRef = databaseRef.push();
  newmessageRef
    .set({
      name: name,
      title: title,
      textarea: textarea,
    })
    .then(function () {
      alert("postcreated");

      setTimeout(function () {
        window.location.reload();
      }, 3000);
    })
    .catch(function (error) {
      window.alert(error);
    });

  //  console.log("subimit");
  //  alert("messagecreated");
};

const submitPost = () => {
  let name = document.getElementById("name").value;
  let title = document.getElementById("title").value;
  let image = document.getElementById("image").files[0];
  let textarea = document.getElementById("textarea").value;

  let imageName = image.name;

  submitData(name, title, textarea, image, imageName);
  console.log("post");
};

document.getElementById("mypostform").addEventListener("submit", submitPost);
