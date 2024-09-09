function showNutritionalChart() {
    const ageGroup = document.getElementById('ageGroup').value;
    const condition = document.getElementById('condition').value;
    const chart = document.getElementById('chart');

    let nutritionInfo = '';

    // Logic to display nutritional chart based on age group and condition
    if (ageGroup === '3-14') {
        nutritionInfo += '<h3>Age 3-14 Nutrition Chart</h3>';
        if (condition === 'none') {
            nutritionInfo += `
                <p>For healthy children:</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 45-65% of daily calories from whole grains, fruits, and vegetables.</li>
                    <li><strong>Protein:</strong> Lean protein from sources like chicken, fish, beans, and legumes (20-30 grams daily).</li>
                    <li><strong>Dairy:</strong> 2-3 servings of low-fat or non-fat dairy for calcium and vitamin D.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of fruits and vegetables per day, focusing on variety and color.</li>
                </ul>`;
        } else if (condition === 'diabetes') {
            nutritionInfo += `
                <p>For children with diabetes:</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> Focus on low glycemic index (GI) foods like oats, quinoa, and whole wheat bread.</li>
                    <li><strong>Protein:</strong> Include lean meats and plant-based proteins, avoiding high-fat meats.</li>
                    <li><strong>Snacks:</strong> Healthy snacks such as nuts, seeds, and fruit with low GI.</li>
                    <li><strong>Sugar:</strong> Limit added sugars, choose high-fiber foods, and manage portion sizes.</li>
                </ul>`;
        }else if (condition === 'cancer') {
            nutritionInfo += `
                <p>For children with cancer:</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 45-55% of daily calories from whole grains, fruits, and vegetables. Focus on complex carbs for sustained energy.</li>
                    <li><strong>Protein:</strong> Aim for higher protein intake (30-40 grams daily) from sources like lean meats, fish, eggs, and plant-based proteins to support healing and tissue repair.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of low-fat or non-fat dairy for calcium, vitamin D, and protein. Consider lactose-free options if the child is sensitive.</li>
                    <li><strong>Fruits & Vegetables:</strong> 5+ servings of antioxidant-rich fruits and vegetables, such as berries, leafy greens, and cruciferous vegetables.</li>
                    <li><strong>Healthy Fats:</strong> Include healthy fats from sources like avocados, nuts, seeds, and olive oil.</li>
                </ul>`;
        } else if (condition === 'heart') {
            nutritionInfo += `
                <p>For children with heart disease:</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 50-60% of daily calories from whole grains, fruits, and vegetables, with an emphasis on fiber-rich foods.</li>
                    <li><strong>Protein:</strong> Lean protein sources like chicken, fish (rich in omega-3 fatty acids), beans, and legumes (20-30 grams daily).</li>
                    <li><strong>Dairy:</strong> 2-3 servings of low-fat or non-fat dairy. Avoid high-fat dairy products.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of fruits and vegetables per day, focusing on heart-healthy options like leafy greens, berries, and citrus fruits.</li>
                    <li><strong>Healthy Fats:</strong> Limit saturated and trans fats. Focus on healthy fats from sources like nuts, seeds, and olive oil.</li>
                </ul>`;
        }else if (condition === 'obesity') {
            nutritionInfo += `
                <p>For children with obesity:</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 40-50% of daily calories from whole grains, fruits, and vegetables. Avoid refined carbs and added sugars.</li>
                    <li><strong>Protein:</strong> Lean protein from sources like chicken, fish, beans, and legumes (20-30 grams daily) to promote satiety and muscle health.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of low-fat or non-fat dairy, avoiding full-fat options.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of fruits and vegetables per day, focusing on low-calorie, nutrient-dense options like leafy greens, broccoli, and berries.</li>
                    <li><strong>Healthy Fats:</strong> Include small amounts of healthy fats from sources like nuts, seeds, avocados, and olive oil, while avoiding excess calorie-dense foods.</li>
                </ul>`;
        } 
        
    } else if (ageGroup === '15-30') {
        nutritionInfo += '<h3>Age 15-30 Nutrition Chart</h3>';
        if (condition === 'none') {
            nutritionInfo += `
                <p>For healthy adults:</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 45-60% of daily calories from whole grains, fruits, and vegetables.</li>
                    <li><strong>Protein:</strong> Around 50-60 grams daily from lean meats, eggs, legumes, and dairy.</li>
                    <li><strong>Fats:</strong> Healthy fats from sources like olive oil, avocado, and nuts (20-35% of daily calories).</li>
                    <li><strong>Hydration:</strong> Drink 8-10 cups of water daily to stay hydrated.</li>
                </ul>`;
        } else if (condition === 'diabetes') {
            nutritionInfo += `
                <p>For adults with diabetes:</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> Limit refined carbs, and prioritize complex carbs like brown rice and whole grain bread.</li>
                    <li><strong>Protein:</strong> Include lean proteins like chicken, fish, tofu, and low-fat dairy.</li>
                    <li><strong>Sugars:</strong> Avoid sugary drinks and snacks. Opt for fruits like berries and apples.</li>
                    <li><strong>Exercise:</strong> Pair a healthy diet with regular physical activity to help manage blood sugar levels.</li>
                </ul>`;
        } else if (condition === 'cancer') {
            nutritionInfo += `
                <p>For individuals with cancer (age 15-30):</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 45-55% of daily calories from whole grains, fruits, and vegetables. Opt for complex carbs like quinoa, brown rice, and sweet potatoes for sustained energy.</li>
                    <li><strong>Protein:</strong> Increase protein intake (50-70 grams daily) from lean sources like chicken, fish, eggs, tofu, and lentils to support tissue repair and immune function.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of dairy, such as Greek yogurt, fortified plant-based milks (like almond or soy milk), and cottage cheese for calcium, vitamin D, and protein.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of antioxidant-rich options like blueberries, spinach, kale, and carrots to help fight oxidative stress.</li>
                    <li><strong>Healthy Fats:</strong> Include healthy fats like avocados, olive oil, flaxseeds, and walnuts to support overall health and brain function.</li>
                </ul>`;
        } else if (condition === 'heart') {
            nutritionInfo += `
                <p>For individuals with heart disease (age 15-30):</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 50-60% of daily calories from high-fiber whole grains like oats, barley, and brown rice, and from fruits and vegetables like apples, broccoli, and leafy greens.</li>
                    <li><strong>Protein:</strong> Lean protein sources like salmon (rich in omega-3 fatty acids), chicken breast, beans, and lentils (50-70 grams daily) to support heart health and muscle maintenance.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of low-fat or non-fat dairy like low-fat cheese, skim milk, or fortified almond milk. Avoid high-fat dairy products.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of heart-healthy options like spinach, berries, and tomatoes to provide antioxidants and fiber.</li>
                    <li><strong>Healthy Fats:</strong> Focus on unsaturated fats from sources like olive oil, chia seeds, and almonds, while limiting saturated fats.</li>
                </ul>`;
        } else if (condition === 'obesity') {
            nutritionInfo += `
                <p>For individuals with obesity (age 15-30):</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 40-50% of daily calories from whole grains like quinoa, barley, and bulgur, and from fruits and vegetables like leafy greens, zucchini, and berries. Avoid refined sugars and processed foods.</li>
                    <li><strong>Protein:</strong> Lean protein sources like chicken, turkey, tofu, beans, and legumes (50-70 grams daily) to promote muscle health and satiety.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of low-fat or non-fat dairy like skim milk, low-fat yogurt, and cottage cheese, while avoiding high-fat options.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of nutrient-dense options like spinach, carrots, and berries, focusing on lower-calorie options to help with weight management.</li>
                    <li><strong>Healthy Fats:</strong> Include small portions of healthy fats from sources like avocados, almonds, and olive oil. Avoid calorie-dense processed foods.</li>
                </ul>`;
        }
    } else if (ageGroup === '31-60') {
        nutritionInfo += '<h3>Age 31-60 Nutrition Chart</h3>';
        if (condition === 'none') {
            nutritionInfo += `
                <p>For healthy middle-aged adults:</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> Focus on whole grains like oats, barley, and quinoa (45-55% of daily calories).</li>
                    <li><strong>Protein:</strong> Around 60-70 grams daily from lean meats, fish, legumes, and dairy.</li>
                    <li><strong>Fats:</strong> Include heart-healthy fats like olive oil, nuts, and seeds. Avoid trans fats.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of fruits and vegetables daily, focusing on antioxidants.</li>
                </ul>`;
        } else if (condition === 'heart') {
            nutritionInfo += `
                <p>For heart disease patients:</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> Prioritize whole grains and fiber-rich foods like oats and legumes to maintain heart health.</li>
                    <li><strong>Protein:</strong> Choose lean proteins such as fish (especially salmon and mackerel), tofu, and legumes.</li>
                    <li><strong>Fats:</strong> Focus on omega-3 rich fats from fish, flaxseeds, and walnuts. Limit saturated fats.</li>
                    <li><strong>Sodium:</strong> Reduce sodium intake to lower blood pressure. Aim for less than 1,500 mg per day.</li>
                </ul>`;
        } else if (condition === 'cancer') {
            nutritionInfo += `
                <p>For individuals with cancer (age 31-60):</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 45-55% of daily calories from complex carbs such as quinoa, oats, sweet potatoes, and whole wheat bread for energy and sustained glucose levels.</li>
                    <li><strong>Protein:</strong> 60-80 grams of protein from lean meats (like chicken, turkey), fish (like salmon), eggs, beans, and tofu to support muscle maintenance and healing.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of dairy or alternatives, such as Greek yogurt, low-fat milk, or fortified soy milk, to ensure adequate calcium and vitamin D.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of antioxidant-rich vegetables and fruits like spinach, kale, berries, and tomatoes to help manage oxidative stress.</li>
                    <li><strong>Healthy Fats:</strong> Include healthy fats from sources like avocados, olive oil, chia seeds, and fatty fish like salmon to support brain health and reduce inflammation.</li>
                </ul>`;
        } else if (condition === 'heart') {
            nutritionInfo += `
                <p>For individuals with heart disease (age 31-60):</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 50-60% of daily calories from high-fiber sources like oats, barley, brown rice, and fruits and vegetables like apples, broccoli, and leafy greens to improve heart health.</li>
                    <li><strong>Protein:</strong> Lean proteins like fish (especially oily fish like salmon and mackerel), chicken, beans, and legumes (60-80 grams daily) to reduce cholesterol and support cardiovascular function.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of low-fat dairy like yogurt, skim milk, or fortified plant-based alternatives. Avoid full-fat dairy to minimize saturated fat intake.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of heart-healthy produce like dark leafy greens, berries, and cruciferous vegetables such as Brussels sprouts and cauliflower.</li>
                    <li><strong>Healthy Fats:</strong> Focus on unsaturated fats from nuts, seeds, olive oil, and fatty fish, while avoiding trans fats and limiting saturated fats from processed foods.</li>
                </ul>`;
        } else if (condition === 'obesity') {
            nutritionInfo += `
                <p>For individuals with obesity (age 31-60):</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 40-50% of daily calories from whole grains like quinoa, barley, and whole wheat bread, and from fruits and vegetables like berries, spinach, and zucchini. Reduce intake of refined sugars and processed carbs.</li>
                    <li><strong>Protein:</strong> Lean proteins like chicken, turkey, fish, tofu, and beans (60-80 grams daily) to promote satiety, support muscle health, and aid in weight loss efforts.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of low-fat or non-fat dairy like skim milk, low-fat yogurt, or fortified almond milk. Avoid high-fat dairy options.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of lower-calorie, nutrient-dense fruits and vegetables like leafy greens, cucumbers, carrots, and berries to help with weight management.</li>
                    <li><strong>Healthy Fats:</strong> Include moderate amounts of healthy fats from sources like avocados, olive oil, and almonds while limiting overall calorie intake from high-fat, processed foods.</li>
                </ul>`;
        } 
    } else if (ageGroup === 'above-60') {
        nutritionInfo += '<h3>Age 60+ Nutrition Chart</h3>';
        if (condition === 'none') {
            nutritionInfo += `
                <p>For healthy seniors:</p>
                <ul>
                    <li><strong>Protein:</strong> Ensure adequate protein intake (around 60-70 grams daily) to prevent muscle loss, from sources like lean meats, eggs, and legumes.</li>
                    <li><strong>Calcium & Vitamin D:</strong> Focus on calcium-rich foods like dairy, fortified plant milks, and leafy greens for bone health.</li>
                    <li><strong>Fats:</strong> Choose healthy fats from olive oil, avocado, and nuts, while avoiding trans fats.</li>
                    <li><strong>Hydration:</strong> Seniors should prioritize hydration, drinking at least 8 cups of water daily.</li>
                </ul>`;
        } else if (condition === 'cancer') {
            nutritionInfo += `
                <p>For cancer patients:</p>
                <ul>
                    <li><strong>Protein:</strong> Increase protein intake from sources like eggs, chicken, fish, and beans to maintain muscle mass.</li>
                    <li><strong>Fruits & Vegetables:</strong> Prioritize antioxidant-rich fruits and vegetables such as berries, spinach, and carrots.</li>
                    <li><strong>Caloric Intake:</strong> Cancer patients may need higher caloric intake to maintain weight during treatment. Include nutrient-dense foods.</li>
                    <li><strong>Hydration:</strong> Drink plenty of fluids, especially water and clear broths, to stay hydrated during treatment.</li>
                </ul>`;
        }if (condition === 'cancer') {
            nutritionInfo += `
                <p>For individuals with cancer (age 60+):</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 40-50% of daily calories from whole grains such as oats, quinoa, and sweet potatoes to maintain energy levels without spiking blood sugar.</li>
                    <li><strong>Protein:</strong> Higher protein intake (70-90 grams daily) from easy-to-digest sources like eggs, lean poultry, fish (e.g., salmon, cod), and plant-based proteins like beans and lentils to preserve muscle mass and support healing.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of calcium and vitamin D-rich dairy or alternatives, such as fortified almond milk, low-fat yogurt, or cheese, to prevent bone loss.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of colorful, antioxidant-rich options like spinach, kale, blueberries, and carrots to help fight oxidative stress and inflammation.</li>
                    <li><strong>Healthy Fats:</strong> Include sources of healthy fats like avocado, olive oil, and walnuts to support brain health and reduce inflammation.</li>
                </ul>`;
        } else if (condition === 'heart') {
            nutritionInfo += `
                <p>For individuals with heart disease (age 60+):</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 45-55% of daily calories from fiber-rich whole grains like oats, barley, and brown rice, as well as vegetables like broccoli and leafy greens to support heart health and digestion.</li>
                    <li><strong>Protein:</strong> Lean proteins like fish rich in omega-3s (e.g., salmon, sardines), chicken breast, beans, and legumes (70-90 grams daily) to maintain muscle and improve cardiovascular health.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of low-fat or non-fat dairy such as skim milk, Greek yogurt, or calcium-fortified soy milk to support bone and heart health.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of heart-healthy options like berries, leafy greens, and cruciferous vegetables to provide fiber and antioxidants that reduce heart disease risks.</li>
                    <li><strong>Healthy Fats:</strong> Focus on unsaturated fats from sources like nuts, seeds, olive oil, and fatty fish, while limiting saturated and trans fats.</li>
                </ul>`;
        } else if (condition === 'obesity') {
            nutritionInfo += `
                <p>For individuals with obesity (age 60+):</p>
                <ul>
                    <li><strong>Carbohydrates:</strong> 40-50% of daily calories from whole grains like quinoa, barley, and vegetables like zucchini, spinach, and cauliflower. Avoid refined carbs and sugary foods.</li>
                    <li><strong>Protein:</strong> Lean proteins like chicken, turkey, fish, tofu, and beans (70-90 grams daily) to maintain muscle mass and help with weight management.</li>
                    <li><strong>Dairy:</strong> 2-3 servings of low-fat or non-fat dairy like skim milk, low-fat yogurt, or calcium-fortified plant-based alternatives to help with bone health and weight control.</li>
                    <li><strong>Fruits & Vegetables:</strong> At least 5 servings of nutrient-dense, low-calorie fruits and vegetables like leafy greens, cucumbers, carrots, and berries for fiber and vitamins.</li>
                    <li><strong>Healthy Fats:</strong> Include moderate amounts of healthy fats from sources like olive oil, avocado, and almonds, while minimizing intake of processed, high-calorie foods.</li>
                </ul>`;
        } 
    }

    // Display the nutritional information or default message if no info is available
    chart.innerHTML = nutritionInfo || 'Please select valid options for age group and condition.';
}
document.getElementById('clearButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirects to the homepage or a specific page
});

