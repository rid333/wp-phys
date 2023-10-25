import axios from "axios";
import { useEffect, useState } from "react";
import { Timeline } from 'react-twitter-widgets';

const SideBar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/wp-json/wp/v2/schedules",
                );
                setEvents(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
        <div className='text-white bg-info flex w-[300px] p-5 flex-col'>
            <section class="antialiased">
                <div class="mx-auto">
                    <h2 class="text-xl font-bold">
                        Schedule
                    </h2>
                    <div class="flow-root mx-auto mt-5">
                        <div class="-my-4 divide-y divide-white">
                            {events.map((event) => (
                                <div class="flex flex-col gap-2 py-4" key={event.id}>
                                    <p class="text-sm font-normal">
                                        {event.acf.date}
                                    </p>
                                    <h3 class="flex w-full justify-between text-sm font-semibold">
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
        <div className="mt-10">
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'hasanuddin_univ'
                }}
                options={{
                    height: '800'
                }}
            />
            </div>
        </>
    );
}
 
export default SideBar;