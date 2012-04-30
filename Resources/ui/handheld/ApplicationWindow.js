function ApplicationWindow(title) {
    
    var userid = '11821713@N00',
        apikey = '';

    var self = Ti.UI.createWindow({
        title : title,
        backgroundColor : '#000',
        tabBarHidden: true
    });

    var label = Ti.UI.createLabel({
        text : 'loading...',
        color : '#fff'
    });

    var labelTitle = Ti.UI.createLabel({
        text : '',
        color : '#fff',
        top : '10px',
        zIndex: 30
    });

    var activityIndicator = Ti.UI.createActivityIndicator({
        font : {
            fontFamily : 'Helvetica Neue'
        },
        color : '#fff',
        message : 'loading...',
        style : Ti.UI.iPhone.ActivityIndicatorStyle.PLAIN,
        height : 'auto',
        width : 'auto'
    });

    self.add(activityIndicator);
    activityIndicator.show();
 
    var xhr = Titanium.Network.createHTTPClient();

    xhr.onload = function() {

        var json = JSON.parse(this.responseText), 
            jsonImages = json.photos.photo, 
            images = [], 
            preview = [], 
            images_big = [], 
            view, 
            image;

        for (index in jsonImages) {
            image = jsonImages[index];
            images[index] = image;
            preview[index] = 'http://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '_m.jpg';
        }

        labelTitle.setText(images[0].title);

        view = Ti.UI.iOS.createCoverFlowView({
            images : preview,
            backgroundColor : '#000',
            top: '30px',
            height: '90%'
        });

        view.addEventListener('change', function(e) {
            labelTitle.setText(images[e.index].title);
        });

        view.addEventListener('click', function(e) {
            var detail = Ti.UI.createWindow({
                title: images[e.index].title,
                backgroundColor: '#000'
            });
            
            var image = Ti.UI.createImageView({
                image: 'http://farm' + images[e.index].farm + '.staticflickr.com/' + images[e.index].server + '/' + images[e.index].id + '_' + images[e.index].secret + '_n.jpg'
            });
            
            detail.add(image);
            
            self.containingTab.open(detail);
        });

        activityIndicator.hide();
        self.add(view);
        self.add(labelTitle);
    };

    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.open('GET', 'http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&nojsoncallback=1&api_key=' + apikey + '&user_id=' + userid + '&format=json');
    xhr.send();
   
    return self;
};

module.exports = ApplicationWindow;
