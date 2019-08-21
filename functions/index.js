// Functions in this file will run on Firebase not on the client
// In terminal: firebase deploy --only functions
const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Yes my g!")
});

const createNotification = (notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('Notification added', doc))
}

exports.episodeCreated = functions.firestore
  .document('episodes/{episodeID}')
  .onCreate(doc => {
    const episode = doc.data()
    const notification = {
      content: 'Added a new episode',
      user: `${episode.authorFirstName} ${episode.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
  })

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {
        const newUser = doc.data()
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification)
      })
})
