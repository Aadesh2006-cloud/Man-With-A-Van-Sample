import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { REVIEWS_DATA } from '../data/reviewsData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ReviewItem } from '../types/moving';
import { Star, CheckCircle2, Search, ArrowRight, ThumbsUp, MessageSquarePlus } from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const { navigateTo } = useRouter();
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [selectedService, setSelectedService] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Submit Review Modal
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [moveService, setMoveService] = useState('Residential Moves');
  const [reviewLocation, setReviewLocation] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const filteredReviews = reviewsList.filter((rev) => {
    const matchesService = selectedService === 'all' || rev.serviceType.toLowerCase().includes(selectedService.toLowerCase());
    const matchesSearch = searchQuery === '' || 
      rev.comment.toLowerCase().includes(searchQuery.toLowerCase()) || 
      rev.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesService && matchesSearch;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !reviewTitle || !reviewText) return;

    const newRev: ReviewItem = {
      id: `user-rev-${Date.now()}`,
      author: authorName,
      location: reviewLocation || 'Local Service Zone',
      serviceType: moveService,
      rating: reviewRating,
      date: 'Just now',
      verified: true,
      title: reviewTitle,
      comment: reviewText,
      moveDetails: `${moveService} · Verified Client`
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setShowSubmitModal(false);
      setAuthorName('');
      setReviewTitle('');
      setReviewText('');
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 pb-20">
      <Breadcrumbs items={[{ label: 'Reviews & Moving Stories', current: true }]} />

      {/* RATING SCORECARD SUMMARY */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-2">
            <span className="text-xs uppercase tracking-wider text-amber-600 font-bold">Independent Customer Feedback</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
              Verified Moving Stories
            </h1>
            <p className="text-sm text-slate-600">
              Thousands of successful relocations. Real reviews from real homeowners, renters, and business operators.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setShowSubmitModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Submit Your Moving Experience</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 text-center lg:border-l lg:border-r border-slate-200 py-4 lg:py-0">
            <div className="text-5xl font-black text-slate-950 font-display tabular-nums">
              4.95
            </div>
            <div className="flex justify-center items-center gap-1 text-amber-500 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Based on 2,840+ Verified Moves
            </div>
          </div>

          <div className="lg:col-span-4 space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-3">
              <span className="w-12 font-semibold">5 Stars</span>
              <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '95%' }} />
              </div>
              <span className="w-8 text-right font-mono tabular-nums">95%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 font-semibold">4 Stars</span>
              <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '4%' }} />
              </div>
              <span className="w-8 text-right font-mono tabular-nums">4%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 font-semibold">3 Stars</span>
              <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '1%' }} />
              </div>
              <span className="w-8 text-right font-mono tabular-nums">1%</span>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH CONTROLS */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-200/80 rounded-xl">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'residential', label: 'Residential' },
            { id: 'commercial', label: 'Commercial' },
            { id: 'local', label: 'Local City' },
            { id: 'interstate', label: 'Interstate' },
            { id: 'storage', label: 'Storage' },
            { id: 'labor', label: 'Labor Only' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedService(cat.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedService === cat.id
                  ? 'bg-white text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search reviews..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* REVIEWS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.length === 0 ? (
          <div className="col-span-2 text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
            No reviews found matching "{searchQuery}". Try another keyword or service category.
          </div>
        ) : (
          filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{rev.date}</span>
                </div>

                <h3 className="text-base font-bold text-slate-950 mb-1.5 font-display">
                  "{rev.title}"
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <span>{rev.author}</span>
                    {rev.verified && (
                      <span className="flex items-center gap-0.5 text-emerald-600 text-[10px] font-medium">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified Move</span>
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500">{rev.location}</div>
                </div>

                <div className="text-[11px] text-amber-700 font-semibold text-right">
                  {rev.moveDetails}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* SUBMIT REVIEW MODAL */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            {submitSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 font-display">Review Published!</h3>
                <p className="text-xs text-slate-600">
                  Thank you for taking the time to share your experience with Man With A Van Moving Company.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-950 font-display">
                    Leave a Verified Move Review
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Miller"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Service Utilized</label>
                      <select
                        value={moveService}
                        onChange={(e) => setMoveService(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 bg-white"
                      >
                        <option value="Residential Moves">Residential Moves</option>
                        <option value="Local Moving">Local Moving</option>
                        <option value="Commercial Moving">Commercial Moving</option>
                        <option value="Interstate Moving">Interstate Moving</option>
                        <option value="Storage Solutions">Storage Solutions</option>
                        <option value="Labor Only Services">Labor Only Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Star Rating</label>
                      <select
                        value={reviewRating}
                        onChange={(e) => setReviewRating(parseInt(e.target.value))}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 bg-white font-bold"
                      >
                        <option value="5">★★★★★ (5 - Excellent)</option>
                        <option value="4">★★★★☆ (4 - Good)</option>
                        <option value="3">★★★☆☆ (3 - Average)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Review Headline *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Efficient, polite, and zero damage"
                      value={reviewTitle}
                      onChange={(e) => setReviewTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Feedback & Moving Day Details *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell future customers about how our movers handled your items, arrival punctuality, and attitude..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 font-bold text-xs text-slate-950 rounded-lg transition-colors cursor-pointer"
                  >
                    Publish Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
