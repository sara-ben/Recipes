//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class Recipe
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Recipe()
        {
            this.RecipeCategories = new HashSet<RecipeCategories>();
            this.RecipeIngredients = new HashSet<RecipeIngredients>();
        }
    
        public int id { get; set; }
        public string name { get; set; }
        public int bakerId { get; set; }
        public Nullable<System.TimeSpan> time { get; set; }
        public Nullable<int> numPortion { get; set; }
        public string image { get; set; }
        public string instruction { get; set; }
    
        public virtual Baker Baker { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RecipeCategories> RecipeCategories { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RecipeIngredients> RecipeIngredients { get; set; }
    }
}
