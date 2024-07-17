sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sameer2a38/ServiceOrderApp/test/integration/FirstJourney',
		'sameer2a38/ServiceOrderApp/test/integration/pages/CustomerMessageList',
		'sameer2a38/ServiceOrderApp/test/integration/pages/CustomerMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessageList, CustomerMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sameer2a38/ServiceOrderApp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessageList: CustomerMessageList,
					onTheCustomerMessageObjectPage: CustomerMessageObjectPage
                }
            },
            opaJourney.run
        );
    }
);