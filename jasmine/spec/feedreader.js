$(function() {
    describe('RSS Feeds', function() {
        //ensures allFeeds is defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //loops through each feed to make sure URL is defined and not empty
        it('URL defined and not empty', function() {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            };
        });
        //loops through each feed to make sure the name is defined and not empty
        it('name is defined and not empty', function() {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            };
        });
    });

    describe('The menu', function() {
        var icon = document.querySelector('.icon-list');
        var menu = document.querySelector('.menu-hidden');
        //ensures the menu is hidden by default
        it('is hidden by default', function() {
            expect(menu.classList.value).toBe("menu-hidden");
        });
        //clicks the icon twice to ensure the menu gets toggled correctly
        it('changes visibility when clicked', function() {
            icon.click();
            expect(menu.classList.value).toBe("");
            icon.click();
            expect(menu.classList.value).toBe("menu-hidden");
        });
    });

    describe('Initial Entries', function() {
        //asynchronous preparation
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        //makes sure that when loadFeed() completes,
        //the feed container is not empty
        it('should load a .entry element into .feed', function(done) {
            expect($('.feed').length).not.toBe(0);
            done();
        });
    });

    describe("New Feed Selection", function() {
        //stores nodeList elements
        arrayOne = [];
        arrayTwo = [];

        beforeEach(function(done) {
            loadFeed(0, function() {
                //pushes to arrays for comparison
                var lf0 = document.querySelectorAll('.entry-link');
                arrayOne.push(lf0[0]);
                loadFeed(1, function() {
                    var lf1 = document.querySelectorAll('.entry-link');
                    arrayTwo.push(lf1[0]);
                    done();
                });
            });
        });
        //makes sure the page content changes on different feed inputs
        it('should check to see if loadFeed() changes the content', function(done) {
            //compares html from each array
            expect(arrayOne[0].href).not.toBe(arrayTwo[0].href);
            done();
        })
    })
}());
