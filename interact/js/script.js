$(document).ready(function(){


  var startPos = null;

  interact('.block')
    .draggable({
      snap: {
        targets: [startPos],
        range: Infinity,
        relativePoints: [{ x: 0.5, y: 0.5 }],
        endOnly: true
      },
      inertia: true,
      onstart: function(event) {
        var rect = interact.getElementRect(event.target);

        $(event.target).addClass('dragging');

        startPos = {
          x: rect.left + rect.width  / 2,
          y: rect.top  + rect.height / 2
        };

        event.interactable.draggable({
          snap: {
            targets: [startPos]
          }
        });
      },
      onend: function(event) {
        var target = event.target;
        $(target).removeClass('dragging');
        target.setAttribute('data-x', 0);
        target.setAttribute('data-y', 0);
      },
      onmove: function(event) {
        var target = event.target,
          x = ( parseFloat(target.getAttribute('data-x')) || 0 ) + event.dx,
          y = ( parseFloat(target.getAttribute('data-y')) || 0 ) + event.dy;

        $(target).css({
          'top': y+'px',
          'left': x+'px'
        });

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      }
    });

  interact('.slot').dropzone({
    accept: '.block',
    overlap: 0.4,
    ondropactivate: function(event) {
      $('.slot').addClass('highlight');
    },
    ondrop: function(event) {
      var slot = $(event.target),
        occupant = slot.find('.block'),
        draggableElement = $(event.relatedTarget);

      if ( occupant.length ) { // slot is already populated
        occupant.removeClass('full');
        occupant.detach().css({top: 0, left: 0}).appendTo($(".dropzone-1"));
        draggableElement.detach().css({top: 0,left: 0}).appendTo(slot);
        draggableElement.addClass('full');
      } else {
        draggableElement.detach().css({top: 0,left: 0}).appendTo(slot);
        draggableElement.addClass('full');
      }

      $('.slot').removeClass('highlight');
    },
    ondragenter: function(event) {
      var draggableElement = event.relatedTarget,
        dropzone  = event.target,
        dropRect         = interact.getElementRect(dropzone),
        dropCenter       = {
          x: dropRect.left + dropRect.width  / 2,
          y: dropRect.top  + dropRect.height / 2
        };

      $(dropzone).addClass('drop-hover');

      event.draggable.draggable({
        snap: {
          targets: [dropCenter]
        }
      });
    },
    ondragleave: function(event) {
      $(event.target).removeClass('drop-hover');
    },
    ondropdeactivate: function(event) {
      $(event.target).removeClass('highlight, drop-hover');
    }
  });


  interact('.dropzone-1').dropzone({
    accept: '.slot .block',
    ondropactivate: function(event) {
      $('.dropzone-1').addClass('highlight');
    },
    ondropdeactivate: function(event) {
      $('.dropzone-1').removeClass('highlight');
      $('.slot').removeClass('highlight');
      $('.dropzone-1').find('.block').removeClass('full');
    },
    ondrop: function(event) {
      var dropzone = $(event.target),
        draggableElement = $(event.relatedTarget);

      $(draggableElement).detach().css({top: 0,left: 0}).appendTo(dropzone);
    },
    ondragenter: function(event) {
      var draggableElement = event.relatedTarget,
        dropzone = event.target,
        $dropzone = $(dropzone),
        inactiveBlocksNo = $dropzone.find('.block').length,
        dropPoint = null,
        $block = $('.block'), // take any block for reference since they're all the same size
        $lastBlock = $dropzone.find('.block:last-child');

      if ( ! inactiveBlocksNo ) {
        dropPoint = {
          x: $dropzone.offset().left + 0.5*($block.width()),
          y: $dropzone.offset().top + 0.5*($block.height())
        };
      } else if ( inactiveBlocksNo % 4 == 0 ) {
        dropPoint = {
          x: $dropzone.offset().left + 0.5*($block.width()),
          y: $lastBlock.offset().top + 1.5*($block.height())
        };
      } else {
        dropPoint = {
          x: $lastBlock.offset().left + 1.5*($block.width()),
          y: $lastBlock.offset().top + 0.5*($block.height())
        };
      }

      event.draggable.draggable({
        snap: {
          targets: [dropPoint]
        }
      });
    }
  });

});