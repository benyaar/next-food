import classes from './page.module.css'
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from '@/lib/meals'
import {Suspense} from "react";
import MealsLoadingPage from "@/components/meals/loader/loading-part";
export const metadata = {
    title: 'All meals',
    description: 'Browse the delicious meals shared by a food-loving community.',
};

async function Meals() {
    const meals = await getMeals()

    return <MealsGrid meals={meals}/>
}

export default function MealsPage() {

    return (
       <>
           <header className={classes.header}>
               <h1>
                   Delicious meals, created
                   <span className={classes.highlight}> by you</span>
               </h1>
               <p>Choose your favorite recipe and cook it yourself</p>
               <p className={classes.cta}>
                   <Link href={'/meals/share'}>
                       Share your recipe
                   </Link>
               </p>
           </header>
           <main>
               <Suspense fallback={<MealsLoadingPage/>}>
                   <Meals/>
               </Suspense>
           </main>
       </>
    );
}
