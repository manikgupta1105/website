  var slider = Sliderman.slider({container: 'devtrixSlider', width: 880, height: 350,
    effects: devtrixEffects, // array of effects. check the source code for more
    display: {
      autoplay: 3000,
      effects_order: 'random',
      description: {hide: true, background: '#ffffff', opacity: 0.5, height: 60, position: 'bottom'},
      loading: {background: '#000000', opacity: 0.7, image: 'demos/demo/img/loading.gif'},
      buttons: {
        hide: true,
        opacity: 1,
        prev: {className: 'devtrixSliderPrev', label: ''},
        next: {className: 'devtrixSliderNext', label: ''}
      },
      navigation: {container: 'devtrixSliderNavigation', label: '<img src="demos/demo/img/clear.gif" alt="" />'}
    }
  });
