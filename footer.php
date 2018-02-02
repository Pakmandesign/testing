        <script src="js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="js/vendor/lodash.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/dygraph/2.0.0/dygraph.js"></script>

        <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
        <!-- <script>window.jQuery || document.write('<script src="js/vendor/jquery-3.2.1.min.js"><\/script>')</script> -->
        
        <!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> -->
<!-- <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.js"></script>
        <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js"></script>
        <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js"></script>
        <script>$(document).ready(function() { $('body').bootstrapMaterialDesign(); });</script>


        <!--Handlebar templates start-->
        <script id="student-template" type="text/x-handlebars-template">
            <table class="table table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Mark</th>
                    <th>Subject</th>
                </tr>
                </thead>
                <tbody>
                {{#each users}}
                <tr>
                    <td><img src="{{ this.avatar_url }}" alt="" class="rounded-circle" style="max-width: 60px;max-height: 60px;"></td>
                    <td>{{ this.first_name }} {{ this.last_name }}</td>
                    <td>{{ this.subject }}</td>
                </tr>
                {{/each}}
                </tbody>
            </table>
        </script>
        <!--Handlebar templates end-->

        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
        <script>
            window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
            ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
        </script>
        <script src="https://www.google-analytics.com/analytics.js" async defer></script>
    </body>
</html>