// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

$('.add-power').click(function() {
  $('.marker:last').before(`<div class="draggable marker"><i class="fa-3x marker-power fas fa-plug"></i><input class="marker-label" type="text" /><span class="remove"><i class="fa-2x fas fa-ban"></i></span></div>`);
});

$('.add-map-marker').click(function() {
  $('.marker:last').before(`<div class="draggable marker"><i class="fa-3x marker-map fas fa-map-marker-alt"></i><input class="marker-label" type="text" /><span class="remove"><i class="fa-2x fas fa-ban"></i></span></div>`);
});

$('.add-flag').click(function() {
  $('.marker:last').before(`<div class="draggable marker"><i class="fa-3x marker-flag fas fa-flag"></i><input class="marker-label" type="text" /><span class="remove"><i class="fa-2x fas fa-ban"></i></span></div>`);
});

// Add person marker
$('.add-person').click(function() {
  $('.marker:last').before(`<div class="draggable marker"><i class="fa-3x marker-person fas fa-street-view"></i><input class="marker-label" type="text" /><span class="remove"><i class="fa-2x fas fa-ban"></i></span></div>`);
});

// Delete marker
$('.main').on('click','.remove',function() {
    $(this).parent().remove();
});

// Expand and collapse settings
$(".control-panel__toggle").click(function () {
    $target = $(this);
    $content = $target.next();
    $target.toggleClass('clicked');
    $content.slideToggle(200, function() {
    });
});
