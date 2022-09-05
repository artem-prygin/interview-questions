export default [
    {
        question: 'What is the difference between switchMap, concatMap and mergeMap operators?',
        answer: ` <ul>
                    <li><code>SwitchMap</code> is a combination of switchAll and map. SwitchAll cancels the previous subscription and subscribes to the new one. For our scenario where we want to do an API call for each item in the array of the ‘outer’ Observable, switchMap does not work well as it will cancel the first 3 subscriptions and only deals with the last one. This means we will get only one result. </li>
                    <li>Unlike switchMap, that unsubscribes from the current Observable if a new Observable comes in, <code>concatMap</code> will not subscribe to the next Observable until the current one completes. The benefit of this is that the order in which the Observables are emitting is maintained
                    </li>
                    <li><code>MergeMap</code> essentially is a combination of mergeAll and map. MergeAll takes care of subscribing to the ‘inner’ Observable so that we no longer have to Subscribe two times as mergeAll merges the value of the ‘inner’ Observable into the ‘outer’ Observable.</li>
                </ul>`,
        links: [
            'https://vdsabev.medium.com/the-simple-difference-between-rxjs-switchmap-and-mergemap-397c311552a5',
            'https://luukgruijs.medium.com/understanding-rxjs-map-mergemap-switchmap-and-concatmap-833fc1fb09ff',
        ]
    },
    {
        question: 'What is the difference between Subject and BehaviorSubject?',
        answer: `<strong>Both Subject and BehaviorSubject are Observables</strong>
<ul>
<li>If you subscribe to a Subject, we won't get current value or initial value. But when you subscribe to a BehaviorSubject, you will get the current or initial value.</li>
<li>For Subject, we don't need to initial a value. But whenever we declare BehaviorSubject we need to initialize a default value.</li>
<li>In Subject, the subscribers will only receive the upcoming value. In BehaviorSubject, the subscribers will receive the previous value and also upcoming value.</li>
</ul>`,
        links: [
            'https://dev.to/revanth_oleti/difference-between-subject-and-behaviorsubject-9g6',
            'https://upmostly.com/angular/subject-vs-replaysubject-vs-behaviorsubject',
        ]
    },
];
