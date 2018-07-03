define components:
    x statusbar
        * logged in
            - user
                - avatar
                - username
            - logout
        * logged out
            - log in
    x chatroom
        - history-control
        - message
            - timestamp
            - user
            - message
    x inputcard *inactivated on logged-out*
        - messageinput
        - sendbutton

define actions:
    x fetch messages
    x send message
    - log in
    - log out
    - load history

implement auth
style page
style components

add webpack
webpack: minify js
