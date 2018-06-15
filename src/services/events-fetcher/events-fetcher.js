const EventsFetcher = {
    getEvents() {
        return new Promise((resolve) =>
            resolve([
                { id: 'friendly-event', name: 'friendly-event' },
                { id: 'other-event', name: 'other-event' },
                { id: 'that-event', name: 'that-event' },
            ])
        );
    }
};

export default EventsFetcher;