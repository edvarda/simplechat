define components:
    x statusbar
        * logged in
            x user
                x avatar
                x username
            x logout
        * logged out
            x log in
                - Make it prompt accountchange
    x chatroom
        - history-control (action: increaseHistoryLength)
        - Align list bottom
        - Make scrollable
        - Make message send scroll to bottom 
            (not an action: doesn't need to be in the state)
        x message
            x timestamp
            x user
            x message
    x inputcard *inactivated on logged-out*
        x messageinput
        x sendbutton

define actions:
    x fetch messages
    x send message
    x log in
    x log out
    - increaseHistoryLength

x implement auth
style components

add webpack
webpack: minify js
