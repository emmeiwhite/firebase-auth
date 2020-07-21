// TRACKING USER STATUS

auth.onAuthStateChanged(user => {
  if (user) {
    // Connecting with the Database and getting our Guides Dynamically | only when the user is logged in, we show the guides
    db.collection('guides').get().then(snapshot => {
      getGuides(snapshot.docs);
    });
    console.log('User has signed in');
  } else {
    getGuides([]); // If user status is logged out we show the message
    console.log('User signed out');
  }
});

/* --- 1) user signup ---*/
const signup = document.querySelector('.signup-form');

signup.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signup['signup-email'].value;
  const password = signup['signup-password'].value;

  // Now signing up with Firebase Auth

  auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      $('#signup-modal').modal('hide');
      signup.reset();
    })
    .catch(err => {
      console.log('ERROR:', err);
    });
});

/* --- 2) logout ---*/

const signout = document.querySelector('.signout');

signout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

/* --- 3) login a registered user ---*/

const login = document.querySelector('.login-form');

login.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = login['login-email'].value;
  const password = login['login-password'].value;

  auth.signInWithEmailAndPassword(email, password)
    .then(res => {
      console.log('USER LOGGED IN', res);
      $('#login-modal').modal('hide');
      signup.reset();
    })
    .catch(err => {
      console.log('USER NOT Registered', err);
    });
});