import { useDispatch, useSelector } from 'react-redux';

export default function Home () {
    const dispatch = useDispatch();

    const store = useSelector((store) => store);
    const randomDrink = store.randomDrink;
    console.log(randomDrink);

    function fetchRandomDrink() {
        dispatch({type: 'FETCH_RANDOM_DRINK'})
    }

    return (
        <div>
            <p>Welcome to React Bartender! Whether you have too many choices of spirits
               and don't know what to make using them, or you are feeling frisky and want
               to let the fates decide how you shall party tonight, you've come to the
               right place!
            </p>
            <button onClick={fetchRandomDrink}>Random Drink</button>
            {randomDrink.map((drink, i) => (
                <>
                <p key={i}>{drink.strDrink}</p>
                <img src={drink.strDrinkThumb}/>
                </>
            ))}
        </div>
    );
}

Stafford
Swift
Henderson
Diggs
Metcalf
Freiermuth
Moore
Koo
49ers