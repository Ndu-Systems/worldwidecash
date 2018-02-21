app.controller('dashController', function($http, $scope, $window, $timeout) {
    if (localStorage.getItem("isLoggedIn") !== "true" || localStorage.getItem("name") === undefined || localStorage.getItem("email") === undefined || localStorage.getItem("name") === "" || localStorage.getItem("email") === "") {
        $window.location.href = "Login";
    }
    // send welcome email
    if (localStorage.getItem("sendWelcomeEmail") === "true") {
        SendMail(localStorage.getItem("emailFrom"), localStorage.getItem("to"), localStorage.getItem("name"), localStorage.getItem("subject"), localStorage.getItem("msg"));
        localStorage.setItem("sendWelcomeEmail", false);
    }
    $scope.name = localStorage.getItem("name");
    $scope.email = localStorage.getItem("email");
    $scope.code = localStorage.getItem("code");
    $scope.cell = localStorage.getItem("cell");


    $scope.isEmailVerified = localStorage.getItem("isEmailVerified");
    $scope.wait = "Please wait...";
    $scope.success = "";
    $scope.notCount = 0;
    // pannels to show
    $scope.showContent = true;
    $scope.ShowNotification = true;

    $scope.showCompleteYourDetails = false;
    // Check if infromation is complete
    if ($scope.cell === undefined || $scope.cell === "") {
        $scope.showCompleteYourDetails = true;
        $scope.showContent = false;
    }

    $scope.Complete = function() {

        $window.location.href = "Personal-Information";

    }
    // Check if email verified
    if (parseInt($scope.isEmailVerified) === 0) {
        $window.location.href = "Verify-Email";
    }

    $scope.GetInvestments = function() {
        $timeout(function() {
            //Get Investments   
            var data = {
                email: localStorage.getItem("email")
            };
            $http.post(GetApiUrl("GetInvestments"), data)
                .success(function(response, status) {
                    $scope.wait = undefined;

                    if (response.data !== undefined) {
                        $scope.investments = response.data;
                    }
                });

        }, 100)
        $scope.GetNotifications();
    };

    // Get Notification 
    $scope.GetNotifications = function() {
        var data = {
            email: localStorage.getItem("email")
        };
        $http.post(GetApiUrl("GetNotification"), data)
            .success(function(response, status) {
                $scope.wait = undefined;

                if (response.data !== undefined) {
                    $scope.notifications = response.data;
                    $scope.notCount = $scope.notifications.length;
                }
            });
    };
    //end get notification

    $scope.UploadProofOfPayment = function(investment) {
        localStorage.setItem("proofId", investment.id);
        localStorage.setItem("keepername", investment.keepername);
        localStorage.setItem("keeperemail", investment.keeperemail);
        $window.location.href = "Proof-Of-Payment";
    };
    $scope.GetHelp = function(investment) {
        localStorage.setItem("getHelpId", investment.id);
        localStorage.setItem("dream", investment.dream);
        localStorage.setItem("amount", investment.expectedAmount);
        $window.location.href = "Get-Help";
    }

    $scope.Confirm = function(not) {
        var data = {
            id: not.id,
            amount: not.amountInvested,
            email: not.email
        };

        $http.post(GetApiUrl("ConfirmPayment"), data)
            .success(function(response, status) {

                $window.location.href = "Thanks-for-Verification";
            });

    }
    // is user locked?
    $scope.IsUserLocked = function() {
        if (localStorage.getItem("userstatus") == "locked") {
            $(".lock").show();
        }
    }

    // Call ...
    $scope.IsUserLocked();


});

app.controller('emailVerifyController', function($http, $scope, $window) {
    $scope.name = localStorage.getItem("name");
    $scope.email = localStorage.getItem("email");
    $scope.code = localStorage.getItem("code");

    $scope.Verify = function() {

        $scope.success = undefined;
        $scope.error = undefined;
        if (parseInt($scope.mycode) === parseInt($scope.code)) {
            var data = {
                email: $scope.email,
                code: $scope.code
            }
            $http.post(GetApiUrl("VerifyEmail"), data)
                .success(function(response, status) {
                    localStorage.setItem("isEmailVerified", 1);
                    localStorage.setItem("isEmailVerified", 1);
                    $scope.isEmailVerified = 1;
                    // send welcome email with a link
                    var msg = "Your email address was verified successfully, Here is your link " + response + ". To get bonuses share this link and get 10% bonus on there first active dream!";
                    localStorage.setItem("emailFrom", "noreply@funderslife.com");
                    localStorage.setItem("to", $scope.email);
                    localStorage.setItem("send_name", $scope.name);
                    localStorage.setItem("subject", "Welcome- Email verified");
                    localStorage.setItem("msg", msg);
                    localStorage.setItem("sendWelcomeEmail", true);
                    $window.location.href = "Dashboard";


                });

        } else {
            $scope.error = "Code does not match!";
        }
    }


    $scope.Resend = function() { //UpdateVerificationCode
        $scope.code = Math.floor(4000 * (Math.random() + 1));
        var maildata = {
            emailTo: localStorage.getItem("email"),
            emailFrom: "account@funderslife.com/",
            subject: "Verification Code",
            name: localStorage.getItem("name"),
            msg: "Welcome to Funders Life,Your verification code is " + $scope.code
        }

        //send mail
        $http.post("http://ndu-systems.net/demo/worldwidecash2/api/emailClient.php", maildata)
            .success(function(response, status) {

                $scope.success = "The code was sent ,please check your emails";
                console.log("Email sent");
            });
    }

});

app.controller('getHelpController', function($http, $scope, $window) {
    if (localStorage.getItem("isLoggedIn") !== "true" || localStorage.getItem("name") === undefined || localStorage.getItem("email") === undefined || localStorage.getItem("name") === "" || localStorage.getItem("email") === "") {
        $window.location.href = "Login";
    }

    $scope.id = localStorage.getItem("getHelpId");
    $scope.dream = localStorage.getItem("dream");
    $scope.amount = localStorage.getItem("amount");
    $scope.name = localStorage.getItem("name");
    $scope.email = localStorage.getItem("email");
    $scope.showDonateButton = true;
    $scope.showDashteButton = false;
    $scope.message = "";

    $scope.GoToDashboard = function() {
        $window.location.href = "Dashboard";
    };
    $scope.Withdraw = function() {
        var data = {
            email: localStorage.getItem("email"),
            investemntId: $scope.id,
            amount: $scope.amount,
            name: $scope.name,
            balance: $scope.amount,
            dream: $scope.dream,
            isBonus: false
        };
        $http.post(GetApiUrl("Withdraw"), data)
            .success(function(response, status) {
                $scope.message = "Your request has been submitted, we will notify you as soon as allocation is found!"
                $scope.showDonateButton = false;
                $scope.showDashteButton = true;

                // notify
                var msg = "Your request has been submitted, we will notify you as soon as allocation is found!";
                SendMail("noreply@funderslife.com", $scope.email, $scope.name, "Withdrawal Notification " + $scope.dream, msg);

            });
    };
});

app.controller('homeController', function($http, $scope, $window) {


});

app.controller('sideMenu', function($http, $scope, $window, $interval) {
    $scope.email = localStorage.getItem("email");
    $scope.name = localStorage.getItem("name");
    $scope.mylink = localStorage.getItem("mylink");
    $scope.showTime = false;

    $scope.GetSideItems = function() {
        var data = {
            parentlink: $scope.mylink,
            email: $scope.email
        };
        $http.post(GetApiUrl("GetSideMenu"), data)
            .success(function(response, status) {
                $scope.members = response.data[0].value;
                $scope.bonus = response.data[1].value;
                $scope.pending = response.data[2].value;
                $scope.pending_investment = response.data[3].value;
                $scope.allocated = response.data[4].value;
                localStorage.setItem("mybonus", $scope.bonus)
                $scope.ShowDonateLink();
                $scope.CountDown();
                //alert($scope.members);
            });
    }

    // chats
    $scope.CountDown = function() {
        if ($scope.allocated) {
            var countDownDate = new Date($scope.allocated).getTime();
            // Update the count down every 1 second
            var x = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now an the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);


                $scope.timeleft = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                // If the count down is finished, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    $scope.timeleft = "Time is Up";
                    // Lock User
                    var data = {
                        email: $scope.email
                    };
                    $http.post(GetApiUrl("LockUser"), data)
                        .success(function(response, status) {
                            $(".lock").show();
                        });


                }
            }, 1000);
            $scope.showTime = true;

        }
    }
    $scope.ShowDonateLink = function() {
        if ($scope.pending_investment > 0) {
            $scope.showDonateLink = false;
        } else {
            $scope.showDonateLink = true;

        }
    }
    $scope.GetChats = function() {
        var data = {
            email: $scope.email
        };
        $http.post(GetApiUrl("GetChats"), data)
            .success(function(response, status) {
                $scope.chats = response.data;
                //alert($scope.members);
            });


    }
    $scope.Send = function() {
        if ($scope.messageBody) {
            var data = {
                senderEmail: $scope.email,
                senderName: $scope.name,
                receiverEmail: "admin@mail.com",
                receiverName: "Admin",
                messageBody: $scope.messageBody,
                clientId: $scope.email
            };
            $http.post(GetApiUrl("SendChat"), data)
                .success(function(response, status) {
                    $scope.GetChats();
                    $scope.messageBody = "";
                    //scroll
                    var height = 0;
                    $('.scrollable p').each(function(i, value) {
                        height += parseInt($(".scrollable").height());
                    });

                    height += '';

                    $('.scrollable').animate({
                        scrollTop: height
                    });

                    //end scroll
                });
        }
    }
    // send with enter
    var input = document.getElementById("txtMessageBody");
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            $scope.Send();
        }
    });
    //end  send with enter
    $scope.GetChats();
    $interval(function() {
        $scope.GetChats();
    }, 1000);


});

app.controller('referralController', function($http, $scope, $window, $interval) {
    $scope.email = localStorage.getItem("email");
    $scope.name = localStorage.getItem("name");
    $scope.mylink = localStorage.getItem("mylink");
    $scope.GetReferrals = function() {
        var data = {
            parentlink: $scope.mylink,
            email: $scope.email
        };
        $http.post(GetApiUrl("GetReferrals"), data)
            .success(function(response, status) {
                $scope.users = response.data;
            });
    }

});

app.controller('bonusController', function($http, $scope, $window, $interval) {
    $scope.email = localStorage.getItem("email");
    $scope.name = localStorage.getItem("name");
    $scope.mylink = localStorage.getItem("mylink");
    $scope.showBonus = true;
    $scope.bonus = parseFloat(localStorage.getItem("mybonus"));
    $scope.GetBonus = function() {
        var data = {
            table: "bonus",
            condition: " email = '" + $scope.email + "' AND status='active'"
        };
        $http.post(GetApiUrl("Get"), data)
            .success(function(response, status) {
                $scope.bonuses = response.data;
            });

    }

    $scope.CashOut = function() {
        $scope.error = "";
        if ($scope.bonus >= 500) {
            var data = {
                email: $scope.email,
                investemntId: 0,
                amount: $scope.bonus,
                name: $scope.name,
                balance: $scope.bonus,
                dream: "My Bonus",
                isBonus: true
            };
            $http.post(GetApiUrl("Withdraw"), data)
                .success(function(response, status) {
                    $scope.message = "Your request has been submitted, we will notify you as soon as allocation is found!"
                    $scope.showBonus = false;

                    // notify
                    $scope.msg = "Your request has been submitted, we will notify you as soon as allocation is found!";
                    SendMail("noreply@funderslife.com", $scope.email, $scope.name, "Withdrawal Notification " + "My Bonus", $scope.msg);
                    $interval(function() {
                        $window.location.href = "My-Bonuses";
                    }, 3000);
                });
        } else {
            $scope.error = "Sorry, Your bonus is withdrawable once it riches R500! Refer more people to get more bonuses";
        }
    }
});

app.controller('pendingController', function($http, $scope, $window, $interval) {
    $scope.email = localStorage.getItem("email");
    $scope.name = localStorage.getItem("name");
    $scope.mylink = localStorage.getItem("mylink");
    $scope.bonus = parseFloat(localStorage.getItem("mybonus"));
    $scope.GetPending = function() {
        var data = {
            table: "withdraw",
            condition: " email = '" + $scope.email + "' AND status='pending'"
        };
        $http.post(GetApiUrl("Get"), data)
            .success(function(response, status) {
                $scope.pendings = response.data;
            });

    }
    $scope.CashOut = function() {
        $scope.error = "";
        if ($scope.bonus >= 500) {
            var data = {
                email: $scope.email,
                investemntId: 0,
                amount: $scope.amount,
                name: $scope.name,
                balance: $scope.bonus,
                dream: "My Bonus",
                isBonus: true
            };
            $http.post(GetApiUrl("Withdraw"), data)
                .success(function(response, status) {
                    $scope.message = "Your request has been submitted, we will notify you as soon as allocation is found!"
                    $scope.showDonateButton = false;
                    $scope.showDashteButton = true;
                    localStorage.setItem("mybonus", 0);
                    // notify
                    var msg = "Your request has been submitted, we will notify you as soon as allocation is found!";
                    SendMail("noreply@funderslife.com", $scope.email, $scope.name, "Withdrawal Notification " + $scope.dream, msg);

                });
        } else {
            $scope.error = "Sorry, Your bonus is withdrawable once it riches R500! Refer more people to get more bonuses";
        }
    }
});


app.controller('ghController', function($http, $scope, $window) {
    $scope.packeges = [200, 300, 400, 500, 1000, 1500, 2000, 3000, 5000, 8000, 10000, 15000, 20000, 30000, 40000, 50000];
    $scope.peroids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    $scope.showDonateButton = true;
    $scope.showDashteButton = false;
    $scope.GoToDashboard = function() {
        $window.location.href = "Dashboard";

    }
    $scope.Donate = function() {
        $scope.message = undefined;
        $scope.isValid = true;
        //				bankname, accountnumber
        var dream = $scope.dream;
        var amount = $scope.amount;
        var peroid = $scope.peroid;


        var data = {
            dream: dream,
            amount: amount,
            peroid: peroid,
            email: localStorage.getItem("email"),
            name: localStorage.getItem("name"),
            cell: localStorage.getItem("cell"),

        };
        if (peroid == undefined || amount == undefined || dream == undefined) {
            $scope.isValid = false;
            $scope.message = "Please fill in the form completely";
            return;
        }

        if ($scope.isValid) {

            $http.post(GetApiUrl("Invest"), data)
                .success(function(response, status) {
                    if (parseInt(response) === 1) {
                        $scope.message = undefined;
                        $scope.showDonateButton = false;
                        $scope.showDashteButton = true;
                        $scope.success = "Your dream was created successfully, Please wait for a member to be assigned to you.";
                        SendMail("noreply@funderslife.com", localStorage.getItem("email"), localStorage.getItem("name"), "New Dream created", $scope.success);
                    } else {
                        $scope.message = response;
                    }

                });
        } else {
            $scope.message = "Please make sure that all required fields are NOT empty"
        }
    };


});

app.controller('investmentController', function($http, $scope, $window) {

    if (localStorage.getItem("isLoggedIn") !== "true") {
        $window.location.href = "Login";
    }
    $scope.proofId = localStorage.getItem("proofId");
    $scope.upload = true;
    $scope.back = false;


    $scope.filesChanged = function(eml) {
        $scope.files = eml.files;
        $scope.filename = $scope.files[0].name;
        //  alert($scope.filename);
        $scope.$apply();
    };
    $scope.Invest = function() {
        if ($scope.filename !== undefined) {
            var doc = "";
            var formData = new FormData();
            angular.forEach($scope.files, function(file) {
                formData.append('file', file);
                formData.append('name', file.name)
            });

            $http.post(GetApiUrl("upload"), formData, {
                    transformRequest: angular.identity,
                    headers: {
                        'Content-Type': undefined
                    }
                })
                .success(function(resp) {
                    var expectedDate = new Date();
                    doc = GetHost(resp);
                    // alert(doc);
                    var data = {
                        doc: doc,
                        id: $scope.proofId
                    };
                    $http.post(GetApiUrl("UpdatePOP"), data).success(function(data, status) {
                        if (parseInt(data) === 1) {
                            //$window.location.href = "Dashboard";
                            $scope.success = "Thanks for your Proof of payment, we will verify and let you know as soon as possible.";
                            $scope.msg = localStorage.getItem("name") + " Uploaded the proof of payment , please check your account balance and confirm the payment!";
                            $scope.error = undefined;
                            $scope.upload = false;
                            $scope.back = true;

                            SendMail("noreply@funderslife.com", localStorage.getItem("keeperemail"), localStorage.getItem("keepername"), "Proof of payment", $scope.msg);

                        } else {
                            $scope.error = "Something went wrong, please try again.";
                        }
                    })
                })
        } else {
            $scope.error = "Please select the files!";
        }

    }

    $scope.Back = function() {
        $window.location.href = "Dashboard";
    }

});

app.controller('profileController', function($http, $scope, $window, $timeout) {

    if (localStorage.getItem("isLoggedIn") !== "true" || localStorage.getItem("name") === undefined || localStorage.getItem("email") === undefined || localStorage.getItem("name") === "" || localStorage.getItem("email") === "") {
        $window.location.href = "Login";
    }
    $scope.name = localStorage.getItem("name");
    $scope.email = localStorage.getItem("email");
    $scope.code = localStorage.getItem("code");
    $scope.cell =parseInt( localStorage.getItem("cell"));

    $scope.bankname = localStorage.getItem("bankname");
   $scope.accountnumber = parseInt(localStorage.getItem("accountnumber"));
   $scope.accountType = localStorage.getItem("accountType");
    $scope.branch = localStorage.getItem("branch");
	
		$scope.address =   localStorage.getItem("address"); 
		$scope.id =  parseInt(localStorage.getItem("idnum"));
		$scope.country =  localStorage.getItem("country");
		$scope.city =  localStorage.getItem("city");

    $scope.banks = ['Absa',
        'African Bank Limited',
        'Capitec Bank',
        'First National Bank',
        'Bidvest Bank Limited',
        'Nedbank Limited',
        'Imperial Bank South Africa',
        'Investec Bank Limited',
        'Sasfin Bank Limited'
    ];

    $scope.accountTypes = ['Cheque', 'Savings'];
 $scope.countries = ['South Africa','Unite States']

    $scope.Save = function() {
        $scope.message = undefined;
        $scope.isValid = true;
        //				bankname, accountnumber
        var bankname = $scope.bankname;
        var accountnumber = $scope.accountnumber;
        var accountType = $scope.accountType;
        var branch = $scope.branch;
	

        var data = {
            bankname: bankname,
            accountnumber: accountnumber,
            accountType: accountType,
            branch: branch,
            email: localStorage.getItem("email")

        };
        if (bankname == undefined || accountnumber == undefined || accountType == undefined || branch == undefined) {
            $scope.isValid = false;
            $scope.message = "Please fill in the form completely";
            return;
        }

        if ($scope.isValid) {

            $http.post(GetApiUrl("UpdateBankingInfo"), data)
                .success(function(response, status) {
                    if (parseInt(response) === 1) {
                        localStorage.setItem("isLoggedIn", true);
                        localStorage.setItem("bankname", $scope.bankname);
                        localStorage.setItem("accountnumber", $scope.accountnumber);
                        localStorage.setItem("accountType", $scope.accountType);
                        localStorage.setItem("branch", $scope.branch);
                        $window.location.href = "Details-Updated";
                    } else {
                        $scope.message = response;
                    }

                });
        } else {
            $scope.message = "Please make sure that all required fields are NOT empty"
        }
    };


});