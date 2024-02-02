export interface MainBannerResponse {
    mainBannerId: number
    title: string
    sort: number
    pcImageUrl: string
    mobileImageUrl: string
    linkUrl: string
    startDate: string
    endDate: string
    creator: string
    updater: string
    deleter?: any
    createdAt: string
    updatedAt: string
    deletedAt?: any
  }
  
  export interface MainShortcutResponse {
    mainShortcutId: number
    title: string
    sort: number
    imageUrl: string
    linkUrl: string
    creator: string
    updater: string
    deleter?: any
    createdAt: string
    updatedAt: string
    deletedAt?: any
  }
  
  //
  
  export interface Collections {
    items: Item2[]
    totalCount: number
  }
  
  export interface Item2 {
    id: number
    type: string
    code: string
    title: string
    subtitle: string
    description: string
    trialPeriod?: any
    installmentPrice?: any
    installmentPeriod?: any
    rating: number
    startDate?: any
    endDate?: any
    viewType?: string
    createdAt: string
    items: (
      | Item
      | Items2
      | Items3
      | Items4
      | Items5
      | Items6
      | Items7
      | Items8
      | Items9
    )[]
    media: Media2[]
    thumbnail?: Media2
    taggings: Tagging[]
    singleCollections: any[]
  }
  
  interface Tagging {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    collectionId: number
    tagId: number
    isOpen: boolean
    tag: Tag
  }
  
  interface Tag {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    id: number
    code: string
    name: string
    description?: any
    type: string
  }
  
  interface Media2 {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    uuid: string
    mimeType: string
    uri: string
    fileName: string
    objectKey: string
    deviceType?: any
    collectionId: number
    seq: number
    itemKey?: any
    type: string
  }
  
  export interface Items9 {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    uuid: string
    name: string
    body?: any
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey?: any
    publication: Publication9
    prdType: number
  }
  
  interface Publication9 {
    id: number
    title: string
    code: string
    productId: number
    prdType: number
    offeringType: string
    rating: number
    isExistResidual: boolean
    isAdult: number
    preface?: string
    prefaceIconUrl?: string
    productName: string
    brandName: string
    media: Media[]
    isTrial: boolean
    tagsOnImage: string[]
    tagsOnDesc: string[]
    priceInfo: PriceInfo
    discounts: Discount3[]
    applyCoupon: boolean
  }
  
  interface Discount3 {
    id: number
    name?: string
    type: string
    calcMethod: string
    value: number
    activeFrom?: any
    activeTo?: any
    qty: number
    remain?: any
  }
  
  export interface Items8 {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    uuid: string
    name: string
    body?: any
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey?: any
    publication: Publication8
    prdType: number
  }
  
  interface Publication8 {
    id: number
    title: string
    code: string
    productId: number
    prdType: number
    offeringType: string
    rating: number
    isExistResidual: boolean
    isAdult: number
    preface: string
    prefaceIconUrl: string
    productName: string
    brandName: string
    media: Media[]
    isTrial: boolean
    tagsOnImage: string[]
    tagsOnDesc: string[]
    priceInfo: PriceInfo3
    discounts: Discount[]
    applyCoupon: boolean
  }
  
  export interface Items7 {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    uuid: string
    name: string
    body?: any
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey?: any
    publication: Publication7
    prdType: number
  }
  
  interface Publication7 {
    id: number
    title: string
    code: string
    productId: number
    prdType: number
    offeringType: string
    rating: number
    isExistResidual: boolean
    isAdult: number
    preface: string
    prefaceIconUrl: string
    productName: string
    brandName: string
    media: Media[]
    isTrial: boolean
    tagsOnImage: string[]
    tagsOnDesc: any[]
    priceInfo: PriceInfo2
    discounts: Discount[]
    applyCoupon: boolean
  }
  
  export interface Items6 {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    uuid: string
    name: string
    body?: any
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey?: any
    publication: Publication6
    prdType: number
  }
  
  interface Publication6 {
    id: number
    title: string
    code: string
    productId: number
    prdType: number
    offeringType: string
    rating: number
    isExistResidual: boolean
    isAdult: number
    preface: string
    prefaceIconUrl: string
    productName: string
    brandName: string
    media: Media[]
    isTrial: boolean
    tagsOnImage: string[]
    tagsOnDesc: string[]
    priceInfo: PriceInfo4
    discounts: (Discount2 | Discount)[]
    applyCoupon: boolean
  }
  
  interface Discount2 {
    id: number
    name: string
    type: string
    calcMethod: string
    value: number
    activeFrom?: any
    activeTo?: any
    qty: number
    remain: number
  }
  
  interface PriceInfo4 {
    price: number
    discountPrice?: number
    discountRate?: number
    couponDiscountPrice?: number
    couponDiscountRate?: number
  }
  
  export interface Items5 {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    uuid: string
    name: string
    body?: any
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey?: any
    publication: Publication5
    prdType: number
  }
  
  interface Publication5 {
    id: number
    title: string
    code: string
    productId: number
    prdType: number
    offeringType: string
    rating: number
    residual: number
    isExistResidual: boolean
    isAdult: number
    preface: string
    prefaceIconUrl: string
    productName: string
    brandName: string
    media: Media[]
    isTrial: boolean
    tagsOnImage: string[]
    tagsOnDesc: string[]
    priceInfo: PriceInfo3
    discounts: Discount[]
    applyCoupon: boolean
  }
  
  interface PriceInfo3 {
    price: number
    discountPrice: number
    discountRate: number
    couponDiscountPrice: number
    couponDiscountRate: number
  }
  
  export interface Items4 {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    uuid: string
    name: string
    body?: any
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey?: any
    publication: Publication4
    prdType: number
  }
  
  interface Publication4 {
    id: number
    title: string
    code: string
    productId: number
    prdType: number
    offeringType: string
    rating: number
    isExistResidual: boolean
    isAdult: number
    preface: string
    prefaceIconUrl: string
    productName: string
    brandName: string
    media: Media[]
    isTrial: boolean
    tagsOnImage: any[]
    tagsOnDesc: any[]
    priceInfo: PriceInfo
    discounts: Discount[]
    applyCoupon: boolean
  }
  
  export interface Items3 {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    uuid: string
    name: string
    body?: any
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey?: any
    publication: Publication3
    prdType: number
  }
  
  interface Publication3 {
    id: number
    title: string
    code: string
    productId: number
    prdType: number
    offeringType: string
    rating: number
    isExistResidual: boolean
    isAdult: number
    preface: string
    prefaceIconUrl: string
    productName: string
    brandName: string
    media: Media[]
    isTrial: boolean
    tagsOnImage: string[]
    tagsOnDesc: string[]
    priceInfo: PriceInfo
    discounts: Discount[]
    applyCoupon: boolean
  }
  
  export interface Items2 {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    uuid: string
    name: string
    body?: any
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey?: any
    publication: Publication2
    prdType: number
  }
  
  interface Publication2 {
    id: number
    title: string
    code: string
    productId: number
    prdType: number
    offeringType: string
    rating: number
    isExistResidual: boolean
    isAdult: number
    preface: string
    prefaceIconUrl: string
    productName: string
    brandName: string
    media: Media[]
    isTrial: boolean
    tagsOnImage: string[]
    tagsOnDesc: any[]
    priceInfo: PriceInfo2
    discounts: Discount[]
    applyCoupon: boolean
    residual?: number
  }
  
  interface PriceInfo2 {
    price: number
    discountPrice?: number
    discountRate?: number
  }
  
  export interface Item {
    createdAt: string
    updatedAt: string
    deletedAt?: any
    uuid: string
    name: string
    body?: any
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey?: any
    publication: Publication
    prdType: number
  }
  
  interface Publication {
    id: number
    title: string
    code: string
    productId: number
    prdType: number
    offeringType: string
    rating: number
    isExistResidual: boolean
    isAdult: number
    preface: string
    prefaceIconUrl: string
    productName: string
    brandName: string
    media: Media[]
    isTrial: boolean
    tagsOnImage: string[]
    tagsOnDesc: any[]
    priceInfo: PriceInfo
    discounts: Discount[]
    applyCoupon: boolean
  }
  
  interface Discount {
    id: number
    name?: any
    type: string
    calcMethod: string
    value: number
    activeFrom?: any
    activeTo?: any
    qty: number
    remain?: any
  }
  
  interface PriceInfo {
    price: number
    discountPrice: number
    discountRate: number
  }
  
  interface Media {
    seq: number
    type: string
    uri: string
    mimeType: string
    deviceType?: any
  }
  