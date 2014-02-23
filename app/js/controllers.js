'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);





phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope) {
        

        var allText = "";
        var txtFile = new XMLHttpRequest();
        txtFile.open("GET", "http://ec2-54-84-122-158.compute-1.amazonaws.com/songs", true);
        txtFile.onreadystatechange = function() {
          if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
            if (txtFile.status === 200) {  // Makes sure it's found the file.
              allText = txtFile.responseText; 
            }
          }
        }
        txtFile.send(null);



        $scope.phones = [ { "name":"Cage The Elephant", "genre":"Alternative", "imageUrl":"http://rdio1img-a.akamaihd.net/album/8/9/6/0000000000094698/square-200.jpg", "songs": [     {"name":"Always Something"}, {"name":"Aberdeen"}, {"name":"Come A Little Closer"}, {"name":"Aint No Rest For The Wicked"}, {"name":"Shake Me Down"} ], "id":"r191504", "likes":2   }, { "name":"Muse", "genre":"Rock/Metal", "imageUrl":"http://rdio0img-a.akamaihd.net/album/f/2/1/00000000001e412f/5/square-200.jpg", "songs": [  {"name":"Survival"}, {"name":"Supremacy"}, {"name":"Panic Station"}, {"name":"Uprising"}, {"name":"Madness"} ], "id":"r39730", "likes":2   }, { "name":"Eva", "genre":"Pop", "imageUrl":"http://rdio1img-a.akamaihd.net/album/6/f/6/00000000001556f6/square-200.jpg", "songs": [    {"name":"Not My Daddy (DJ Skeet Skeet Club Mix)"}, {"name":"Body on Mine (Dave Aude Remix)"}, {"name":"Body on Mine (Original Radio Edit)"}, {"name":"Body on Mine (Chris Cox Radio Edit)"}, {"name":"Body on Mine (Dave Aude Radio Edit)"} ], "id":"r12107", "likes":2    }, { "name":"The Whitest Boy Alive", "genre":"Alternative", "imageUrl":"http://rdio2img-a.akamaihd.net/album/f/7/2/00000000000c927f/square-200.jpg", "songs": [  {"name":"Intentions"}, {"name":"Keep A Secret"}, {"name":"Fireworks"}, {"name":"Golden Cage"}, {"name":"Burning"} ], "id":"r446270", "likes":2 }, { "name":"Duke Ellington", "genre":"Jazz", "imageUrl":"http://rdio1img-a.akamaihd.net/album/0/f/d/0000000000047df0/square-200.jpg", "songs": [    {"name":"Money Jungle (24-Bit Mastering) (2002 Digit..."}, {"name":"Take The a Train"}, {"name":"Fleurette Africaine (African Flower) (2002 ..."}, {"name":"Three Little Words"}, {"name":"Sugar Rum Cherry (Dance of the Sugar-Plum F..."} ], "id":"r820", "likes":2  }, { "name":"Eden Espinosa", "genre":"Other", "imageUrl":"http://rdio2img-a.akamaihd.net/album/2/1/6/000000000023a612/1/square-200.jpg", "songs": [  {"name":"Stone Cold Sober"}, {"name":"Look Around"}, {"name":"One Song Glory"}, {"name":"Im Not That Girl"}, {"name":"Once Upon a Time"} ], "id":"r337903", "likes":2  }, { "name":"The John Conahan Group", "genre":"Other", "imageUrl":"http://rdio0img-a.akamaihd.net/album/6/e/5/000000000026b5e6/1/square-200.jpg", "songs": [ {"name":"Darling"}, {"name":"Bought Yourself a Second Chance"}, {"name":"I Wont Let You Back"}, {"name":"Finding Jenny"}, {"name":"Trouble in Maryland"} ], "id":"r2619381", "likes":3 }, { "name":"The Forum Quorum", "genre":"Classic Rock", "imageUrl":"http://rdio0img-a.akamaihd.net/album/2/0/0/00000000003d3002/1/square-200.jpg", "songs": [ {"name":"Your Turn To Cry"}, {"name":"No More Tears"}, {"name":"(I Wanna) Testify"}, {"name":"Just The Same"}, {"name":"Synopsis"} ], "id":"r3351159", "likes":3  }, { "name":"The Vitals", "genre":"Other", "imageUrl":"http://rdio0img-a.akamaihd.net/album/7/9/a/000000000020ba97/1/square-200.jpg", "songs": [     {"name":"Hands"}, {"name":"Car Outside"}, {"name":"Eel River"}, {"name":"Star Stuff"}, {"name":"Swinger"} ], "id":"r2364949", "likes":2    }, { "name":"TL", "genre":"Other", "imageUrl":"http://rdio1img-a.akamaihd.net/album/d/5/a/00000000001a5a5d/1/square-200.jpg", "songs": [     {"name":"Cuanto Te Amo"}, {"name":"Intro"}, {"name":"El Heroe"}, {"name":"California Daze"}, {"name":"It’s whatever u like"} ], "id":"r465844", "likes":2  }, { "name":"Foo Fighters", "genre":"Rock/Metal", "imageUrl":"http://rdio0img-a.akamaihd.net/album/e/9/2/000000000003a29e/square-200.jpg", "songs": [    {"name":"All My Life"}, {"name":"My Hero"}, {"name":"The Pretender"}, {"name":"Best Of You"}, {"name":"Everlong"} ], "id":"r138625", "likes":2 }, { "name":"Plastic", "genre":"Electronic", "imageUrl":"http://rdio2img-a.akamaihd.net/album/8/a/5/00000000001255a8/square-200.jpg", "songs": [     {"name":"How To Beat Space Invaders (Earl & Turner R..."}, {"name":"Just Waiting (ft. Tina)"}, {"name":"Tak Cie Kocham"}, {"name":"So-Phisticated"}, {"name":"So-Phisticated (Dub Mix)"} ], "id":"r251369", "likes":2  }, { "name":"John Hoppin", "genre":"Other", "imageUrl":"http://rdio2img-a.akamaihd.net/album/2/1/f/000000000008bf12/1/square-200.jpg", "songs": [    {"name":"1992"}, {"name":"Young Lovers"}, {"name":"You Are Now Rocking With The Best In The Wo..."}, {"name":"Im A Pirate"}, {"name":"Riding In Cars"} ], "id":"r441306", "likes":2    }, { "name":"Kristin Chenoweth", "genre":"Other", "imageUrl":"http://rdio2img-a.akamaihd.net/album/c/a/e/0000000000042eac/1/square-200.jpg", "songs": [  {"name":"Sleigh Ride/Marshmallow World (with John Pi..."}, {"name":"Taylor, the Latte Boy"}, {"name":"Im Not That Girl (Reprise) (Original Cast ..."}, {"name":"Dear Old Shiz (Original Cast Recording/2003)"}, {"name":"Popular (Original Cast Recording/2003)"} ], "id":"r329006", "likes":2 }, { "name":"Pastor de Andorra", "genre":"Other", "imageUrl":"http://rdio2img-a.akamaihd.net/album/3/c/3/00000000000663c3/square-200.jpg", "songs": [ {"name":"Si a los ancianos maltratas"}, {"name":"Andorra se hizo famosa"}, {"name":"La palomica"}, {"name":"Esa sangre aragonesa"}, {"name":"La naranja nacio verde"} ], "id":"r490581", "likes":3    }, { "name":"Sammy Wants To Fly", "genre":"Other", "imageUrl":"http://rdio2img-a.akamaihd.net/album/2/0/c/0000000000291c02/1/square-200.jpg", "songs": [ {"name":"Through My Veins"}, {"name":"The Wall the Wheel the Sheet"}, {"name":"Under the Snow"}, {"name":"Word"}, {"name":"Tonight Ill Fly"} ], "id":"r2784345", "likes":2 }, { "name":"Margo", "genre":"Pop", "imageUrl":"http://rdio0img-a.akamaihd.net/album/3/8/b/0000000000004b83/square-200.jpg", "songs": [  {"name":"Truck Drivin Woman"}, {"name":"Warm"}, {"name":"The Hills Above Drumquin"}, {"name":"When They Ring Those Golden Bells"}, {"name":"How Far Is Heaven?"} ], "id":"r5616", "likes":2    }, { "name":"Kellie Pickler", "genre":"Country/Folk", "imageUrl":"http://rdio2img-a.akamaihd.net/album/d/e/2/000000000003a2ed/square-200.jpg", "songs": [    {"name":"I Wonder"}, {"name":"Tough"}, {"name":"Red High Heels"}, {"name":"Didnt You Know How Much I Loved You"}, {"name":"Best Days Of Your Life"} ], "id":"r302575", "likes":2   }, { "name":"Eric Whitacre", "genre":"Classical", "imageUrl":"http://rdio0img-a.akamaihd.net/album/9/4/a/000000000007aa49/1/square-200.jpg", "songs": [  {"name":"Five Hebrew Love Songs: Temuná (A Picture)"}, {"name":"A Boy And A Girl"}, {"name":"Sleep"}, {"name":"The Seal Lullaby"}, {"name":"Lux Aurumque"} ], "id":"r70726", "likes":2 }, { "name":"Red Hot Chili Peppers", "genre":"Rock/Metal", "imageUrl":"http://rdio1img-a.akamaihd.net/album/f/3/9/000000000001693f/3/square-200.jpg", "songs": [     {"name":"Give It Away"}, {"name":"Scar Tissue"}, {"name":"Californication"}, {"name":"Soul To Squeeze"}, {"name":"Under The Bridge"} ], "id":"r85470", "likes":2   }, { "name":"All", "genre":"Rock/Metal", "imageUrl":"http://rdio2img-a.akamaihd.net/album/c/6/2/000000000001126c/square-200.jpg", "songs": [     {"name":"Ill Get There"}, {"name":"Worlds On Heroin"}, {"name":"Think The World"}, {"name":"Worlds On Heroin"}, {"name":"Shes My Ex"} ], "id":"r32669", "likes":2  }, { "name":"Queens Of The Stone Age", "genre":"Rock/Metal", "imageUrl":"http://rdio0img-a.akamaihd.net/album/5/b/a/0000000000037ab5/square-200.jpg", "songs": [     {"name":"The Vampyre Of Time And Memory"}, {"name":"If I Had A Tail"}, {"name":"Keep Your Eyes Peeled"}, {"name":"I Sat By The Ocean"}, {"name":"No One Knows"} ], "id":"r154836", "likes":2   }, { "name":"Them Crooked Vultures", "genre":"Rock/Metal", "imageUrl":"http://rdio3img-a.akamaihd.net/album/0/9/1/0000000000047190/square-200.jpg", "songs": [   {"name":"Dead End Friends"}, {"name":"Elephants"}, {"name":"Mind Eraser, No Chaser"}, {"name":"New Fang"}, {"name":"No One Loves Me & Neither Do I"} ], "id":"r311272", "likes":2  }, { "name":"Four", "genre":"Jazz", "imageUrl":"http://rdio1img-a.akamaihd.net/album/9/a/1/00000000000611a9/square-200.jpg", "songs": [  {"name":"Came"}, {"name":"Oak St."}, {"name":"Youre Amazing"}, {"name":"The Last Thing Ill Say to You (im Sorry)"}, {"name":"At the Show"} ], "id":"r472136", "likes":2    }, { "name":"Dj Sleeptalker", "genre":"Other", "imageUrl":"http://rdio0img-a.akamaihd.net/album/4/6/f/00000000000c3f64/square-200.jpg", "songs": [   {"name":"Somewhere Inside"}, {"name":"Diamonds & Pearls (Intro)"}, {"name":"Vision Control"}, {"name":"Somewhere Inside"}, {"name":"Lounge Experiment"} ], "id":"r823357", "likes":2   }, { "name":"Megan", "genre":"Electronic", "imageUrl":"http://rdio1img-a.akamaihd.net/album/0/e/8/000000000006a8e0/square-200.jpg", "songs": [   {"name":"Runaway (Extended Edit)"}, {"name":"Dangerous"}, {"name":"The Heartbreak Remedy"}, {"name":"Walking Alone in London"}, {"name":"Fuckin Wit A Playa (Feat. Woodie)"} ], "id":"r511017", "likes":3  }, { "name":"The Districts", "genre":"Rock/Metal", "imageUrl":"http://rdio3img-a.akamaihd.net/album/5/c/7/00000000001a07c5/2/square-200.jpg", "songs": [     {"name":"Long Distance"}, {"name":"Piano Song"}, {"name":"Funeral Beds"}, {"name":"Where We Started"}, {"name":"Lyla"} ], "id":"r791314", "likes":2    } ];

    $scope.orderProp = '-likes';
  }]);



phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

angular.module('genre', []);

function GenreCtrl($scope) {
    $scope.genre = [
        {'name': 'Reggae', 'genre': 'Reggae'},
        {'name': 'Classical', 'genre': 'classical'}




        ];
    
    $scope.genreIncludes = ["Reggae","Classical","Pop","Electronic","Rock/Metal","Alternative","Country/Folk","ClassicRock","Jazz","Hip-Hop","Rap","Other"];
    
    $scope.includeGenre = function(genre) {
        var i = $.inArray(genre, $scope.genreIncludes);
        if (i > -1) {
            $scope.genreIncludes.splice(i, 1);
        } else {
            $scope.genreIncludes.push(genre);
        }
    }

   
$scope.input = "";
$scope.clearInput = function() {
  $scope.input = "";
};
    


    $scope.genreIsReggae = function(genre) {
        if (genre == 'Reggae') {
            return true;
        }
        return false;
    }

    $scope.genreIsElectronic = function(genre) {
        if (genre == 'Electronic') {
            return true;
        }
        return false;
    }


    $scope.genreIsPop = function(genre) {
        if (genre == 'Pop') {
            return true;
        }
        return false;
    }

    $scope.genreIsRockMetal = function(genre) {
        if (genre == 'Rock/Metal') {
            return true;
        }
        return false;
    }

    $scope.genreIsAlternative = function(genre) {
        if (genre == 'Alternative') {
            return true;
        }
        return false;
    }

    $scope.genreIsCountryFolk= function(genre) {
        if (genre == 'Country/Folk') {
            return true;
        }
        return false;
    }

    $scope.genreIsClassicRock = function(genre) {
        if (genre == 'Classic Rock') {
            return true;
        }
        return false;
    }

    $scope.genreIsClassical = function(genre) {
        if (genre == 'Classical') {
            return true;
        }
        return false;
    }

    $scope.genreIsJazz = function(genre) {
        if (genre == 'Jazz') {
            return true;
        }
        return false;
    }

    $scope.genreIsHipHop = function(genre) {
        if (genre == 'Hip-Hop') {
            return true;
        }
        return false;
    }


    $scope.genreIsClassical = function(genre) {
        if (genre == 'Classical') {
            return true;
        }
        return false;
    }

    $scope.genreIsRap = function(genre) {
        if (genre == 'Rap') {
            return true;
        }
        return false;
    }

    $scope.genreIsOther = function(genre) {
        if (genre == 'Other') {
            return true;
        }
        return false;
    }


    $scope.increment = function(counter) {
        counter = counter + 1;
        return counter;
    }

    
    $scope.genreFilter = function(genre) {
        if ($scope.genreIncludes.length > 0) {
            if ($.inArray(genre.genre, $scope.genreIncludes) < 0)
                return;
        }
        
        return genre;
    }
    $scope.continueListingDown = function() {
      
      console.log(counter);
      console.log("dat jawn doe");
      if (counter >= 5) {
        return true;
      }
      else {
        counter = counter + 1;
        return false;
      }
      
    }

    $scope.refreshList = function() {
      counter = 0;
      console.log("refreshing");
      console.log(countOfList);
      return;
    }
}
