const Schedule = (props) => {
    const events = props.events;

    return (
        <>
        <div className='flex flex-col mt-16 text-white'>
            <section class="bg-primary antialiased">
                <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-16">
                    <div class="max-w-3xl mx-auto text-center">
                        <h2 class="text-4xl font-extrabold">
                            Schedule
                        </h2>
                        <hr className="m-auto border-4 border-white mt-2 w-1/12"/>
                    </div>
                    
                    <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                        <div class="-my-4 divide-y divide-white">
                            {events.map((event) => (
                                <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center" key={event.id}>
                                <p class="w-32 text-lg font-normal sm:text-right shrink-0">
                                    {event.acf.date}
                                </p>
                                <h3 class="flex w-full justify-between text-lg font-semibold">
                                    <a href="#" class="hover:underline">{event.acf.events}</a>
                                    <svg aria-hidden="true" class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg> 
                                </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}
 
export default Schedule;