import css from './appointment.module.scss'
 
export default function Appointment(){
    return (
        <div>
            <div className={css.container}>
                <div className={css.content}>
                    <div className={css.title}>Make your appointment</div>
                    <form action="#" method="post">
                        <div className={css.input_box}>
                            <span className={css.detail}>Username</span>
                            <input type="text" id="username" name="username" placeholder="Enter your username" required />
                        </div>
                        <div className={css.input_box}>
                            <span className={css.detail}>Email</span>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className={css.input_box}>
                            <span className={css.detail}>Phone number</span>
                            <input type="number" id="phone_number" name="phone_number" placeholder="Enter your phone number" required />
                        </div>
                        <div className={css.input_box}>
                            <span className={css.detail}>Pickup date</span>
                            <input type="date" id="pickup_date" name="pickup_date" placeholder="" data-role="datepicker" required />
                        </div>
                        <div className={css.input_box}>
                            <span className={css.detail}>Return date</span>
                            <input type="date" id="return_date" name="return_date" placeholder="" data-role="datepicker" required />
                        </div>
                        <div className={css.button}>
                            <button>Submit appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}