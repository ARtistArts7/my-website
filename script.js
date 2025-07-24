(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            } 
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function handleQuestionClick() {
    const questionElement = document.querySelector('.buttons');
    questionElement.textContent = "Are you really okay?";
}

// CONTROLS
var bubbliness = 8; // Recommended between 1 and 10
var motionResistance = 3; // Recommended between 1 and 10


// Create layers
$('<div />', { 'class': 'layer layer1'  }).appendTo('body');
$('<div />', { 'class': 'layer layer2'  }).appendTo('body');
$('<div />', { 'class': 'layer layer3'  }).appendTo('body');
$('<div />', { 'class': 'layer layer4'  }).appendTo('body');

// Create bubbles
var xsBubbles = bubbliness*7.5; 
var smBubbles = bubbliness*5; 
var mdBubbles = bubbliness*3; 
var lgBubbles = bubbliness*2; 

// Fill layer 1
for(var i = 0; i < xsBubbles; i++) {
	var topPos = (Math.random() * 100) + '%';
	var leftPos = (Math.random() * 100) + '%';
	$('<div />', { 'class': 'bubble bubble-xs' }).appendTo('.layer1').css("top", topPos).css("left", leftPos);
}
// Fill layer 2
for(var i = 0; i < smBubbles; i++) {
	var topPos = (Math.random() * 100) + '%';
	var leftPos = (Math.random() * 100) + '%';
	$('<div />', { 'class': 'bubble bubble-sm' }).appendTo('.layer2').css("top", topPos).css("left", leftPos);
}
// Fill layer 3
for(var i = 0; i < mdBubbles; i++) {
	var topPos = (Math.random() * 100) + '%';
	var leftPos = (Math.random() * 100) + '%';
	$('<div />', { 'class': 'bubble bubble-md' }).appendTo('.layer3').css("top", topPos).css("left", leftPos);
}
// Fill layer 4
for(var i = 0; i < lgBubbles; i++) {
	var topPos = (Math.random() * 100) + '%';
	var leftPos = (Math.random() * 100) + '%';
	$('<div />', { 'class': 'bubble bubble-lg' }).appendTo('.layer4').css("top", topPos).css("left", leftPos);
}

motionResistance = motionResistance *= -1; // Reverse direction


// Mouse-parallax function
var windowWidth = $(window).width();
if( windowWidth > 1024 ) {
  
  $(window).mousemove(function(event){

    // Get centre of layer
    var centerX = $(window).width() / 2;
    var centerY = $(window).height() / 2;

    // Get mouse coordinates
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var layer1X = (mouseX - centerX) / (motionResistance/0.2);
    var layer1Y = (mouseY - centerY) / (motionResistance/0.2);


    var layer2X = (mouseX - centerX) / (motionResistance/0.3);
    var layer2Y = (mouseY - centerY) / (motionResistance/0.3);

    var layer3X = (mouseX - centerX) / (motionResistance/0.5);
    var layer3Y = (mouseY - centerY) / (motionResistance/0.5);

    var layer4X = (mouseX - centerX) / (motionResistance/0.75);
    var layer4Y = (mouseY - centerY) / (motionResistance/0.75);

    $('.layer1').css('left', layer1X).css('top', layer1Y);
    $('.layer2').css('left', layer2X).css('top', layer2Y);
    $('.layer3').css('left', layer3X).css('top', layer3Y);
    $('.layer4').css('left', layer4X).css('top', layer4Y);

  });
  
} // end if


// Pop function
if( windowWidth > 1024 ) { // Desktop
	
	$('.bubble').mouseover( function() {
		if ( $(this).hasClass('bubble-wobble') ) {
			var thisBubble = $(this);
			thisBubble.addClass('bubble-pop');
			setTimeout( function() {
				thisBubble.hide();
			}, 500);
		} else {
			$(this).addClass('bubble-wobble');
		}
	});
	
} else { // iPad and smaller
	
	$('.bubble').click( function() {
		var thisBubble = $(this);
		thisBubble.addClass('bubble-pop');
		setTimeout( function() {
			thisBubble.hide();
		}, 500);
	});
}