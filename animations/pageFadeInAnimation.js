const pageFadeInAnimation = {
  hidden: {
    scale: 0.8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2
    }
  },
  onAnimationStart: () => {
    // Force scroll to top
    window.scrollTo(0, 0);
    
    // For more stubborn cases, try this additional approach
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}

export default pageFadeInAnimation;