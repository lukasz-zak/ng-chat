describe('My App', function() {
  describe('Query List', function() {
    beforeEach(function() {
      // point relative to your apps index.html
      browser().navigateTo('/');
    });

    it('Query Headers', function() {
      expect(element('.container h4').count()).toBe(3);
    });

    it('Check Navigation', function() {
      expect(element('ul.nav li a').count()).toBe(3);
      element('ul.nav li a').click();
      expect(browser().location().path()).toBe('/');
    });

    it('Should redirect to chat page', function () {
      expect(browser().location().path()).toBe('/');
      element('.jumbotron .btn.btn-lg.btn-success').click();
      expect(browser().location().path()).toBe('/chat');
    });
  });
});
