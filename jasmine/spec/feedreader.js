/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
// make sure all feeds have url.
         it ('url defined', function() {
            for(let feed of allFeeds) {
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);
            }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         *
         */
// make sure all feeds have names.
         it ('has valid names',function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(typeof feed.name).toBe('string');
                expect(feed.name.length).not.toBe(0);

            

             });
         });

    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

    

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('is hidden', function() {
             const body = document.querySelector('body');
             expect(body.classList.contains('menu-hidden')).toBe(true);

         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it('toggles on and off', function() {
              const body = document.querySelector('body');
              const menu = document.querySelector('.menu-icon-link');
            
// getting and testing menu icon, storing menu icon element in a variable and using click method to stimulate.
              menu.click();
              expect(body.classList.contains('menu-hidden')).toBe(false);

              menu.click();
              expect(body.classList.contains('menu-hidden')).not.toBe(false);
          });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

    
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         //pass a function that lets our Jasmine test know that our before each function
         // has finished (done)
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        
        
        
        it('should loadFeed and render the entry and .feed container', function () {
            expect($('.feed').has('.entry').length).not.toBe(0);
        });
     });

    
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {

        // Avoid duplicated setup
        // Initial loaded feed setup
        let initFeedSelection;
        beforeEach(function(done) {
          loadFeed(0, function() {
            initFeedSelection = document.querySelector(".feed").innerHTML;
    
            loadFeed(1, function() {
              done();
            });
          });
        });
     /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // Make sure when new feed is loaded using loadFeed function,
        // the content changes
        it("changes its loaded content", function(done) {
          let newFeedSelection = document.querySelector(".feed").innerHTML;
          expect(initFeedSelection).not.toBe(newFeedSelection);
          done();
        });
      });
    
    }());
        
