﻿namespace ToonLoonWeb.Models
{
    public class Toon
    {
        public string? Author { get; set; }
        public string? CoverURL { get; set; }
        public string? MangaDescription { get; set; }
        public string? MangaId { get; set; }
        public string? MangaTitle { get; set; }
        public string? Genre { get; set; }
    }
    public class Chapter
    {
        public string? ChapterID { get; set; }
        public string[]? Images { get; set; }
    }
}
