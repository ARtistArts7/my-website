// Removed mouse-parallax movement and improved bubble responsiveness

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

// Bubble pop function - more responsive
$('.bubble').on('mouseenter touchstart', function() {
    var $bubble = $(this);
    if (!$bubble.hasClass('bubble-pop')) {
        $bubble.addClass('bubble-pop');
        setTimeout(function() {
            $bubble.hide();
            setTimeout(function() {
                // Randomize position
                var topPos = (Math.random() * 100) + '%';
                var leftPos = (Math.random() * 100) + '%';
                $bubble.css("top", topPos).css("left", leftPos);
                $bubble.removeClass('bubble-pop').show();
            }, 1000); // Bubble reappears after 1 second
        }, 250); // Faster pop
    }
});
