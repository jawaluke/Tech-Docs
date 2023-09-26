
(ref) - 
(ref) - https://www.tektutorialshub.com/angular/angular-navigating-between-routes/
Angular routing : 
- it's allow you navigating from one view to another view.

Angular Router:
- Angular router is an separate module in angular used for routing. angular has it as an own library.

Components:

Router:
- Router is an service used for navigation from one component to another component.
- it has two method to navigate to a route
    1) navigate()
    2) navigateByUrl()

    1) navigate :
        - want to navigate to route using link parameter array
        - navigate method first arguement would be link parameter array similar to routerLink directives

        - always use absolute path unless if you provide starting point

             navigate(commands: any[], extras: NavigationExtras = { skipLocationChange: false }):        Promise<boolean>
             .then((e) => if(e){success}, else{failure})

        refer: https://angular.io/api/router/Router#navigate

        eg:
          this.router.navigate(['../Detail'], { relativeTo: this.activatedRoute });
          router.navigate(['team', 33, 'user', 11], {relativeTo: route});


    2) navigateByUrl() : 
        - routerLink also internally use navigate by url method for navigation.
        - it takes two parameters.
        - Returns Promise.

        - always use absolute path.

            navigateByUrl(url: string | UrlTree,
                         extras: NavigationBehaviorOptions = {
                                                    skipLocationChange: false
                                                    }): Promise<boolean>

            .then((e) => if(e){success}, else{failure})

            refer : https://angular.io/api/router/Router#navigateByUrl

            NavigationBehaviorOptions : 
                1) skipLocationChange?: boolean - if it is true you wont see the url change but navigates to the route component.

                2) replaceUrl? :boolean - it will skip the history of that url when browser back button pressed.the current route is removed from the browser history while navigating to the new route.
                        refer eg: https://www.bennadel.com/blog/3602-using-replaceurl-in-order-to-honor-the-back-button-while-chaining-absolute-redirects-in-angular-7-2-13.htm      

                3) queryParamsHandling: 'preserve' & 'merge'
                    - preserve: preserve the current query param to the next navigation or route.
                        eg: // from /view1?page=1 to/view2?page=1
                        - router.navigate(['/view2'], { queryParams: { page: 2 },  queryParamsHandling: "preserve"
                    - merge: preserve the query param appends new query params to the params from the current URL
                        eg: // from /view1?page=1 to/view2?page=1&otherKey=2
                        - router.navigate(['/view2'], { queryParams: { otherKey: 2}, queryParamsHandling: "merge"

                4) fragment - set hash fragment for the URL.
                    eg:
                        // Navigate to /results#top
                        router.navigate(['/results'], { fragment: 'top' });             

                5) preserveFragment:Boolean - When true, preserves the URL fragment for the next navigation.
                    eg:
                        // Preserve fragment from /results#top to /view#top
                        router.navigate(['/view'], { preserveFragment: true });    

            eg: router.navigateByUrl('/com3/green/hilaryx', {replaceUrl: true })
                router.navigateByUrl('/com3/green/hilaryx')
                router.navigateByUrl('/com3')


    To use Relative path in 1) navigate()
                                - just provide relatedTo paramter to navigationBehaviourOption
                                    eg: this.router.navigate(['../Detail'], { relativeTo: this.activatedRoute });
                            2) RouterLink directives : 
                                - you wouldn’t provide the object with the relativeTo property. The ActivatedRoute is implicit in a RouterLink directive.

                                 eg:
                                    Go to parent
                                        <a [routerLink]="['../']">Back</a>
                                    Go to sibling
                                        <a [routerLink]="['../<sibling>']">Goto sibling</a>
                                    Go to child
                                        <a [routerLink]="['<Child>']">Goto Child</a>
    
    Query Param:
        - Query parameter is a key value pair which right to the ? in the url
        - Each params are separated by &.
            eg: /product?page=2&filter=all


    Route Param:
        - Route params are Required, Angular Router use them to determine the route.
        - they are part of the Route Definition.
            eg: /product/1
                { path: 'product/:id', component: ProductDetailComponent }

    Difference between query and route param:
        - Query param are optional, the missing parameter doesnot stop angular from navigating to the route
    
    which one to use:
        - Query parameter can be used for like filter, sort, paginate. for like sort product by rating, sort product by name as well as filter product price and color.

        - route paramter can be used to identify product resource and resources like group of product/ specific product.
        for eg /product/1 or /products

    Query Param Usage:
        -Query param are not part of route so we do not define them in routes array like route.

        Passing query param:

        - navigate()
            this.route.navigate(['product'], {'queryParam': {sort:'name', filter: 'price'}})
            .. product?sort=name&filter=price


        - navigateByUrl()
            it only use the absolute url so we need to build our query string programmatically.
            this.route.navigateByUrl('/product?sort=name&filter=price')

        - RouterLink
            we use Query Param property in Router link directives to pass the query parameters
            we add this in template file
                <a [routerLink]="['product']" [queryParam] = "{sort:'name', filter:'price'}">Sort</a>


    Reading Query Param:
        similar like reading route parameter from ActivatedRoute.
        1) using Observable of queryParamMap or queryParam
        2) using snapshot of queryParamMap or queryParam

        The ParamMap object contains three methods :
            1. get method retrieves the value of the given parameter.
            2. getAll method retrieves all parameters
            3. has method returns true if the ParamMap contains a given parameter else false

        1) this.activatedRoute.queryParamMap.subscribe({
                next: (param) = > { param.get('sort') param.get('filter') },
                error: (err) = > {}
            })

            this.activatedRoute.queryParams.subscribe({
                next: (param) = > { param['sort'] param['filter'] },
                error: (err) = > {}
            })

        2) this.activatedRoute.snapshot.queryParamMap.get('sort')
            this.activatedRoute.snapshot.queryParamMap.get('filter')

            this.activatedRoute.snapshot.queryParams['sort']



ROUTES:

    routes is an array of route (Type Route).
    eg:
    routes:Route[] = {
        path: "/home",
        component: HomeComponent,
    }

    1) title: String | Type<Resolve<string>> | ResolveFn<string>
         - used to define title for the route page.
         {path: "/home", title: "Home Page", component: HomeComponent}

    2) path: String
         - path to match against
         - can not be used together with custom matcher function
         {path:"/home", component: HomeComponent}
    3) pathMatch: 'prefix' | 'full'
         - By Default angular take 'prefix'.
         - prefix -> it will match URL against path in left side.
            eg: "ho" can match "home"
         - full -> it will match against entire URL.
                -> For empty path ('') path match strategy should be "full" Otherwise empty path is prefix of any URL. create a endless loop.
            eg: "home" can match "home"
    