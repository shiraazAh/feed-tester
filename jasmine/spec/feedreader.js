
$(function() {

    /* Test suite: "RSS Feeds" */
    describe('RSS Feeds', function() {
        
        /* Test 1 in "RSS Feeds": test that allFeeds variable is defined and not empty */
        it('are defined', function() {
            // To test if allFeeds is defined 
            expect(allFeeds).toBeDefined();
            // To test allFeeds is not empty
            expect(allFeeds.length).not.toBe(0);
        });
        
        /* Test 2 in "RSS Feeds": Loop through allFeeds and ensure it has a URL of defined and
           URL is not empty. */
        it('has url', function() {
            // to test if all the feed url are defined
            for(feed of allFeeds){
                expect(feed.url).toBeDefined();
            }
        });

        /* Test 3 in "RSS Feeds": Loop through allFeeds and ensure it has a name of defined and
         name is not empty */
        it('has name', function(){
            // To test if all the feed names are defined
            for(feed of allFeeds){
                expect(feed.name).toBeDefined();
            } 
        })
    });

    /* Test suite: "The menu" */
    describe('The menu', function() {
        
        /* Test 1 in "The menu": Make sure the menu element is hidden by default. */
        it('is hidden by default', function() {
            expect(document.querySelector('body')).toHaveClass('menu-hidden');
        })

        /* Test 2 in "The menu": Make sure the menu changes visibility when the menu icon is clicked.
         * 1. Does the menu display when clicked and
         * 2. Does it hide when clicked again. */
        it('changes visibility', function() {
            var menuIcon = document.querySelector('.menu-icon-link');

            // first click
            menuIcon.click();
            // expect menu class not to have menu-hidden on first click
            expect(document.querySelector('body')).not.toHaveClass('menu-hidden');;
            // Second click
            menuIcon.click();
            // expect menu class to have menu-hidden on the second click.
            expect(document.querySelector('body')).toHaveClass('menu-hidden');
        })

    });

    /* Test suite: "Initial Entries" */
    describe('Inital Entries', function() {
    
        /* Test 1 in "Initial Entries": Ensures the loadFeed function is called and completes its work,
         * and aslo tests if there is at least a single .entry element within the .feed container.
         */

        /* loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        })

        it('Async has atleast one entry', function(done) {
            // To test if the no.of Entries is greater than zero.
            expect(document.querySelector('.feed').getElementsByClassName('entry').length).toBeGreaterThan(0);
            done();
        })

    })

     /* Test suite: "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* Test 4 in "New Feed Selection": Ensures a new feed is loaded by the loadFeed function 
         and that the entry content actually changes */

        // get all feed entries
        var entries = document.querySelector('.feed').getElementsByClassName('entry')

        beforeEach(function(done){
            loadFeed(1, done);
        })

        it('always changes', function(done){
    
            // To test whether the first entry content is not equal to the second entry content
            expect(entries[1].innerText).not.toEqual(entries[0].innerText);
            done();
        })
        
    })
}());
