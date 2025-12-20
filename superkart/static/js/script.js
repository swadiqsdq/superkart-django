// some scripts

// jquery ready start
$(document).ready(function() {
	// jQuery code


    /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
    For sliders, interactions and other

    */ ///////////////////////////////////////
    

	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });


    $('.js-check :radio').change(function () {
        var check_attr_name = $(this).attr('name');
        if ($(this).is(':checked')) {
            $('input[name='+ check_attr_name +']').closest('.js-check').removeClass('active');
            $(this).closest('.js-check').addClass('active');
           // item.find('.radio').find('span').text('Add');

        } else {
            item.removeClass('active');
            // item.find('.radio').find('span').text('Unselect');
        }
    });


    $('.js-check :checkbox').change(function () {
        var check_attr_name = $(this).attr('name');
        if ($(this).is(':checked')) {
            $(this).closest('.js-check').addClass('active');
           // item.find('.radio').find('span').text('Add');
        } else {
            $(this).closest('.js-check').removeClass('active');
            // item.find('.radio').find('span').text('Unselect');
        }
    });



	//////////////////////// Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if




    
}); 
// jquery end

gsap.registerPlugin(ScrollTrigger);

// -----------------------------
// SETUP (Your provided snippet logic)
// -----------------------------
const scrollerEl = document.querySelector("#main-scroll-container"); // Assuming Locomotive wrapper exists
let scrollerForST;

if (scrollerEl) {
  scrollerForST = scrollerEl;

  ScrollTrigger.scrollerProxy(scrollerEl, {
    scrollTop(value) {
      if (arguments.length) {
        scrollerEl.scrollTop = value;
      }
      return scrollerEl.scrollTop;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: "transform",
  });

  scrollerEl.addEventListener("scroll", () => ScrollTrigger.update());
  ScrollTrigger.addEventListener("refresh", () => ScrollTrigger.update());
} else {
  // Fallback for native scrolling (standard CodePen behavior)
  scrollerForST = window;
}

// -----------------------------
// HALF CIRCLE 3D GALLERY INIT
// -----------------------------
initHalfCircleCarousel(scrollerForST);

function initHalfCircleCarousel(scroller) {
  const carousel = document.getElementById("half3dCylinder");
  const faces = document.querySelectorAll(".carousel__face");
  const faceCount = faces.length;

  // Angle between each face (360 degrees / number of faces)
  const theta = 360 / faceCount;

  // Radius (distance from center).
  // Should match CSS variable or be calculated dynamically
  const radius = 450;

  // 1. Position the cards in a cylinder shape
  gsap.set(faces, {
    transformOrigin: `50% 50% ${-radius}px`,
    z: radius, // Move items out to radius
    rotateY: (i) => i * theta // Rotate them to form the circle
  });

  // 2. Animate rotation on scroll
  // We pin the section and rotate the cylinder container
  gsap.to(carousel, {
    rotateY: -360, // Full rotation
    ease: "none",
    scrollTrigger: {
      trigger: "#half3d-section",
      scroller: scroller === window ? "body" : scroller, // Handle native vs locomotive
      start: "top top",
      end: "+=2000", // Length of the scroll animation
      scrub: 1,
      pin: true,
      // invalidateOnRefresh helps recalculate on resize
      invalidateOnRefresh: true
    }
  });
}