describe('Welcome Page', function() {

  it('says "Hello World"', function() {
    var helloWorld = document.getElementsByTagName('p')[0].textContent;
    expect(helloWorld).toBe("Hello World");
  });

});  
