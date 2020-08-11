/* --- 0) listen for auth status changes --- */

auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('guides').get().then(snapshot => {
      getGuides(snapshot.docs);
      showMenuUi(user);
    })
  } else {
    getGuides([]); // If user status is logged out we show the message
    showMenuUi();
    console.log('User logged out !!! ***');
  }
});

/* --- 1) user signup ---*/
const signup = document.querySelector('.signup-form');

signup.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = signup['signup-email'].value;
  const password = signup['signup-password'].value;

  // Now signing up with Firebase Auth. We use the method provided by the firebase-auth
  // auth.createUserWithEmailAndPassword(email,password), and it returns a promise

  auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
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
    .then(credential => {
      console.log('USER LOGGED IN', credential);
      $('#login-modal').modal('hide');
      signup.reset();
    })
    .catch(err => {
      console.log('USER NOT Registered', err);
    });
});

/* --- 4)  --- */