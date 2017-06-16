# Delaware Defensive Driving Online Course Macro for American Safety Council
Automatically clicks the next button whenever available.

# Only for this online course:
http://www.dmv.org/de-delaware/defensive-driving.php
http://americansafetycouncil.com/delaware/

These are the same course. 2nd link is just the link from the first website I linked

# How to use:
https:course.uceusa.com/Courses/content/701/index.aspx
Go to the link above and start from the first page. When you are at a page that starts with "https:course.uceusa.com/Courses/"

Use Tampermonkey to apply this script. The script only runs
https:course.uceusa.com/Courses/content/701/pages_xx.aspx?
The 2 x is the page number.
https:course.uceusa.com/Courses/content/701/pages_370.aspx? is the final exam page.

You can't directly go to the exam page so you have to literally go through all the previous pages and wait till the times passed.
This script automatically clicks the next button when the time goes to 00:00:00.

Every now and then you might get to the last part of each module which would lead you back to the index page when you run this code.
Just guesstimate which page you can resume and manually go to that page. For example: https:course.uceusa.com/Courses/content/701/pages_300.aspx? Might be the start of module 4.

This script skips the quizzes in between the modules as they are not a requirement to finish the course. (The developer of the website were stupid enough to not implement a check function.)

Every now and then the website asks you security questions and the script will not be able to answer those, thus redirecting you to the login screen or something like that.

Hope you use this well to easily finish this pointless online course.

# How to take final exam:
This script doesn't do the final exam for you. Its easy.
Just google each questions and you can get the answer.
