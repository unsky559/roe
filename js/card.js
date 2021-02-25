document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
        elem = document.getElementById("float-card");
        elemText = document.getElementById("head");
        elemLinks = document.getElementById("links");

        elem.style.transform = "translate("+ ( (event.pageX-window.innerWidth/2)/50 )+"px, "+ ( (event.pageY-window.innerHeight/2)/50 ) +"px)";
        elemText.style.transform = "translate("+ ( (event.pageX-window.innerWidth/2)/100 )+"px, "+ ( (event.pageY-window.innerHeight/2)/100 ) +"px)";
        elemLinks.style.transform = "translate("+ ( (event.pageX-window.innerWidth/2)/200 )+"px, "+ ( (event.pageY-window.innerHeight/2)/200 ) +"px)";
        if($("#float-card").is(':hover')){
          elem.style.transform = "translate("+ ( (event.pageX-window.innerWidth/2)/10 )+"px, "+ ( (event.pageY-window.innerHeight/2)/10 ) +"px)";
          elemText.style.transform = "translate("+ ( (event.pageX-window.innerWidth/2)/10 )+"px, "+ ( (event.pageY-window.innerHeight/2)/10 ) +"px)";
          elemLinks.style.transform = "translate("+ ( (event.pageX-window.innerWidth/2)/20 )+"px, "+ ( (event.pageY-window.innerHeight/2)/20 ) +"px)";
        }





    }
