$(function() {
    describe('RSS Feeds', () => {
        //ensures allFeeds is defined and not empty
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        //loops through each feed to make sure URL is defined and not empty
        it('URL defined and not empty', () => {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            };
        });
        //loops through each feed to make sure the name is defined and not empty
        it('name is defined and not empty', () => {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            };
        });
    });

    describe('The menu', () => {
        var icon = document.querySelector('.icon-list');
        //ensures the menu is hidden by default
        it('is hidden by default', () => {
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });
        //clicks the icon twice to ensure the menu gets toggled correctly
        it('changes visibility when clicked', () => {
            icon.click();
            expect($('body').hasClass("menu-hidden")).toBe(false);
            icon.click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });
    });

    describe('Initial Entries', () => {
        //asynchronous preparation
        beforeEach(done => {
            loadFeed(0, () => {
                done();
            });
        });
        //makes sure that when loadFeed() completes,
        //the feed container is not empty
        it('should load a .entry element into .feed', done => {
            expect($('.feed.entry')).toBeDefined();
            done();
        });
    });

    describe("New Feed Selection", () => {

        beforeEach(done => {
            loadFeed(0, () => {
                initialData = document.querySelector('.feed').innerHTML;
                loadFeed(1, () => {
                  newData = document.querySelector('.feed').innerHTML;
                  done();
                });
            });
        });
        //makes sure the page content changes on different feed inputs
        it('should check to see if loadFeed() changes the content', done => {
            //compares html from each array
            expect(initialData).not.toBe(newData);
            done();
        })
    })
}());
