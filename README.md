# angularjs1-5-nested-scopes
AngularJS 1.5 Nested Scopes

Based on 'Nested Scopes and Controller As Syntax' at https://www.youtube.com/watch?v=eAMMvnolbZc&index=33&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl

#Nested Scopes and Controller As Syntax

BEFORE:

See scriptA.js, indexA.html and stylesA.css how to implement this.

AFTER:

See scriptB.js, indexB.html and stylesB.css how to implement this.

Continued with 'Controller As versus $scope' at https://www.youtube.com/watch?v=F6BIxHkiHjc&list=PL6n9fhu94yhWKHkcL7RJmmXyxkuFB3KSl&index=34

Controller As syntax is new and is officially released in 1.2.0
$scope is the old technique and is available since the initial version of angular's release.

You can use either one of these techniques. Both have their own uses.

For example, controller as syntax makes your code more readable when working with nested scopes.

If you want to use $scope, it has to be injected into the controller function, whereas with controller as syntax there is no need for such injection, unless you need it for something else.